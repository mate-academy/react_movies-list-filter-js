import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Box } from './components/Box';

function filterMovies(movies, { query }) {
  const preparedMovies = [...movies];

  const trimmedQuery = query.trim().toLowerCase();
  const visibleMovies = preparedMovies.filter(
    movie => movie.title.toLowerCase().includes(trimmedQuery)
      || movie.description.toLowerCase().includes(trimmedQuery),
  );

  return visibleMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = filterMovies(
    moviesFromServer,
    { query },
  );

  return (
    <div className="page">
      <div className="page-content">
        <Box
          query={query}
          filterBy={(newQuery) => {
            setQuery(newQuery);
          }}
        />

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
