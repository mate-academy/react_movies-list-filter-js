import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';
import { Box } from './components/Box';

function filterByParam(movies, { query }) {
  let preparedMovies = [...movies];
  const lowerQuery = query.toLowerCase();
  preparedMovies = preparedMovies.filter(
    movie => movie.title.toLowerCase().includes(lowerQuery) || 
    movie.description.toLowerCase().includes(lowerQuery));
  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = filterByParam(moviesFromServer, { query });

  return (
    <div className="page">
    <div className="page-content">
      <Box
        filterBy={(newQuery) => {
          setQuery(newQuery.trim());
        }}
      />

      <MoviesList movies={visibleMovies} />
    </div>

    <div className="sidebar">Sidebar goes here</div>
  </div>
  )
};
