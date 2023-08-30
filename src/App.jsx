import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const preparedFilter = (movie, query) => movie
  .trim()
  .toLowerCase()
  .includes(
    query
      .trim()
      .toLowerCase(),
  );

function getPreparedMovies(movies, { query }) {
  const prepearedQuery = query.trim().toLowerCase();

  return movies.filter(
    ({ title, description }) => preparedFilter(title, prepearedQuery)
    || preparedFilter(description, prepearedQuery),
  );
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, { query });

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
                value={query}
                onChange={changeEvent => setQuery(changeEvent.target.value)}
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
