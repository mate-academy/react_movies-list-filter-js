import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState(moviesFromServer);

  function filterByInput(event) {
    const input = event.target.value.toString().toLowerCase().trim();
    const filter = moviesFromServer.filter(
      el =>
        el.title.toLowerCase().includes(input) ||
        el.description.toLowerCase().includes(input),
    );

    if (input) {
      setQuery(filter);
    } else {
      setQuery([...moviesFromServer]);
    }
  }

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
                onChange={filterByInput}
              />
            </div>
          </div>
        </div>
        <MoviesList movies={query} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
