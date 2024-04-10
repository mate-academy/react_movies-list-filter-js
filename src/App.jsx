import { useState } from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { Box } from './components/Box';
import { MoviesList } from './components/MoviesList';

function getPreperdMovies(movies, { query }) {
  let preperdMovies = [...movies];
  const normalizedQuery = query.trim().toLowerCase();

  preperdMovies = preperdMovies.filter(
    ({ title, description }) =>
      title.toLowerCase().includes(normalizedQuery) ||
      description.toLowerCase().includes(normalizedQuery),
  );

  return preperdMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreperdMovies(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="page-content">
        <Box
          query={query}
          onQuery={newQuery => {
            setQuery(newQuery);
          }}
        />

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
