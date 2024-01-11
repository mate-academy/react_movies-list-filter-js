import './App.scss';
import React, { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterBy(query) {
  const fixedQuery = query.toLowerCase().trim();

  return [...moviesFromServer].filter(
    item => item.title.toLowerCase().includes(fixedQuery)
      || item.description.toLowerCase().includes(fixedQuery),
  );
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterBy(query);

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
                onChange={event => setQuery(event.target.value)}
                value={query}
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={visibleMovies}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
