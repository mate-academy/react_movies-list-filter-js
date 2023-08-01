import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const defaultValue = '';

function findQUERY(stringForQuery, queryFormat) {
  return stringForQuery.toLowerCase().trim().includes(queryFormat);
}

function getPreparedMovies(movies, { query }) {
  let preparedMovies = [...movies];
  const formatQuery = query.toLowerCase().trim();

  if (query) {
    preparedMovies = preparedMovies
      .filter(movie => (
        findQUERY(movie.title, formatQuery)
        || findQUERY(movie.description, formatQuery)));
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState(defaultValue);
  const visibleMovies = getPreparedMovies(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
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
