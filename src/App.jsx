import './App.scss';
import React, { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(moviesFromServer);

  const handleQuery = event => {
    const term = event.target.value;

    setQuery(term);

    const filtered = moviesFromServer.filter(
      item =>
        item.title.toLowerCase().includes(term.toLowerCase().trim()) ||
        item.description.toLowerCase().includes(term.toLowerCase().trim()),
    );

    setFilteredItems(filtered);
  };

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
                onChange={handleQuery}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredItems} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
