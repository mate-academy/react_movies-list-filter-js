import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Box } from './components/Box/Box';
import moviesFromServer from './api/movies.json';
// import { MOVIE } from './constants';

export const App = () => {
  const [query, setQuery] = useState('');

  const normalizedQuery = query.trim().toLowerCase();

  const visibleMovies = moviesFromServer.filter(movie => {
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();

    return (
      title.includes(normalizedQuery) || description.includes(normalizedQuery)
    );
  });

  return (
    <div className="page">
      <div className="page-content">
        <Box query={query} setQuery={setQuery} />
        {/* <Box /> */}
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
