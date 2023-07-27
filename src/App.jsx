import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import { Box } from './components/Box';
import moviesFromServer from './api/movies.json';
import './App.scss';

function getPreparedMovies(movies, query) {
  let preparedMovies = [...movies];
  const normalizeQuery = query.toLowerCase().trim();

  if (query) {
    preparedMovies = preparedMovies
      .filter(movie => movie.title.toLowerCase().includes(normalizeQuery)
        || movie.description.toLowerCase().includes(normalizeQuery));
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="page">
      <div className="page-content">
        <Box filterBy={(newQuery) => {
          setQuery(newQuery);
        }}
        />

        <MoviesList movies={getPreparedMovies(moviesFromServer, query)} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
