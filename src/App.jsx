import { useState } from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { Box } from './components/Box';

function includesQuery(input, query) {
  return input.trim().toLowerCase().includes(query.trim().toLowerCase());
}

function getFilteredMovies(movies, query) {
  let preparedMovies = [...movies];

  preparedMovies = preparedMovies.filter((movie) => {
    const titleMatch = includesQuery(movie.title, query);
    const descriptionMatch = includesQuery(movie.description, query);

    return titleMatch || descriptionMatch;
  });

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getFilteredMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <Box
          filterBy={setQuery}
          query={query}
        />

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
