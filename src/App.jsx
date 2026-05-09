import React, { useState } from 'react';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

export const App = () => {
  const [query, setQuery] = useState('');

  const normalizedQuery = query.trim().toLowerCase();

  const visibleMovies = moviesFromServer.filter(movie => {
    return (
      movie.title.toLowerCase().includes(normalizedQuery) ||
      movie.description.toLowerCase().includes(normalizedQuery)
    );
  });

  return (
    <div className="page">
      <div className="page-content">
        <div className="container">
          <input
            id="search-query"
            type="text"
            className="input"
            placeholder="Search movies..."
            value={query}
            onChange={event => setQuery(event.target.value)}
            data-cy="searchInput"
          />
        </div>

        <MoviesList movies={visibleMovies} />
      </div>
    </div>
  );
};
