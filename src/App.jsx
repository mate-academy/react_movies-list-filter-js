import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getPreparedMovies = (movies, query) => {
  let preparedMovies = [...moviesFromServer];
  const normalQuery = query.toLowerCase().trim();

  if (query) {
    preparedMovies = preparedMovies.filter(
      movie => movie.title.toLowerCase().includes(normalQuery)
      || movie.description.toLowerCase().includes(normalQuery),
    );
  }

  return preparedMovies;
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, query);

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
                onChange={(event) => {
                  setQuery(event.currentTarget.value);
                }}
                value={query}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
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
