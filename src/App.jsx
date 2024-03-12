/* eslint-disable indent */
import React, { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState(null);

  const visibleMovies = query
    ? moviesFromServer.filter(item => {
        const isTitle = item.title.toLowerCase().includes(query);
        const isDescription = item.description.toLowerCase().includes(query);

        return isTitle || isDescription;
      })
    : moviesFromServer;

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
                onChange={e => setQuery(e.target.value.trim().toLowerCase())}
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
