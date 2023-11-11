import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies, query) {
  let preparedMoovies = [...movies];

  if (query) {
    const prepQuery = query.trim().toLowerCase();

    preparedMoovies = preparedMoovies.filter(
      movie => movie.title.toLowerCase().includes(prepQuery)
        || movie.description.toLowerCase().includes(prepQuery),
    );
  }

  return preparedMoovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMoovies = getPreparedMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMoovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
