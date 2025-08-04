// src/App.jsx
import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function App() {
  // 1) track the raw query
  const [query, setQuery] = useState('');

  // 2) trim + lowercase once per render
  const normalizedQuery = query.trim().toLowerCase();

  // 3) filter by title OR description
  const visibleMovies = moviesFromServer.filter(movie => {
    return (
      movie.title.toLowerCase().includes(normalizedQuery) ||
      movie.description.toLowerCase().includes(normalizedQuery)
    );
  });

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
                id="search-query" // ← needed by Cypress
                type="text"
                className="input"
                placeholder="Type search word"
                value={query} // ← bind state
                onChange={e => setQuery(e.target.value)} // ← update
              />
            </div>
          </div>
        </div>

        {/* only render the filtered list */}
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
}

export default App;
