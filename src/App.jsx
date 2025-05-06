import './App.scss';
import React, { useState } from 'react';

import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const normalizedQuery = query.trim().toLowerCase();

  const visibleMovies = moviesFromServer.filter(
    movie =>
      movie.title.toLowerCase().includes(normalizedQuery) ||
      movie.description.toLowerCase().includes(normalizedQuery),
  );

  return (
    <div className="container">
      <h1 className="title">Movie List</h1>

      <input
        className="input is-primary mb-4"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <ul>
        {visibleMovies.map(movie => (
          <li key={movie.id} className="box">
            <h2 className="subtitle">{movie.title}</h2>
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
