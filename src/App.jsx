import './App.scss';
import { useState } from 'react';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { Control } from './components/Control/Control';

function getPreparedMovies(movies, { query }) {
  let preparedMovies = [...movies];
  const correctedData = data => data.trim().toLowerCase();

  if (query) {
    preparedMovies = preparedMovies
      .filter(movie => correctedData(movie.title).includes(correctedData(query))
      || correctedData(movie.description).includes(correctedData(query)));
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getPreparedMovies(
    moviesFromServer,
    { query },
  );

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>
            <Control
              query={query}
              filterBy={(newQuery) => {
                setQuery(newQuery);
              }}
            />
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
