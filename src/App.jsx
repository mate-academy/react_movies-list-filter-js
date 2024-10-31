import { useState } from 'react';
import './App.scss';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getMovies(movies, query) {
  const updateQuery = query.toLowerCase().trim();

  const changedMovies = [...movies].filter(
    el =>
      el.title.toLowerCase().includes(updateQuery) ||
      el.description.toLowerCase().includes(updateQuery),
  );

  return changedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getMovies(moviesFromServer, query);

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
                onChange={e => {
                  setQuery(e.target.value);
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

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
