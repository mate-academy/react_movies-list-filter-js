import React, { useState } from 'react';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = moviesFromServer.filter(({ title, description }) => {
    const normalizedQuery = query.trim().toLowerCase();

    return (
      title.toLowerCase().includes(normalizedQuery) ||
      description.toLowerCase().includes(normalizedQuery)
    );
  });

  return (
    <div className="app">
      <input
        id="search-query"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <MoviesList movies={visibleMovies} />
    </div>
  );
};

const MoviesList = ({ movies }) => (
  <div className="movies-list">
    {movies.map(({ id, title, description }) => (
      <div key={id} className="card">
        <h2 className="title">{title}</h2>
        <p>{description}</p>
      </div>
    ))}
  </div>
);
