import './App.scss';
import { useEffect, useState } from 'react';
import { MoviesList } from './components/MoviesListComponent';
import moviesFromServer from './api/movies.json';
import { Box } from './components/BoxComponent/Box';

export const App = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState([...moviesFromServer]);

  useEffect(() => {
    setVisibleMovies(
      [...moviesFromServer].filter(movie => {
        return (
          movie.title.toLowerCase().includes(query.trim().toLowerCase()) ||
          movie.description.toLowerCase().includes(query.trim().toLowerCase())
        );
      }),
    );
  }, [query]);

  return (
    <div className="page">
      <div className="page-content">
        <Box query={query} setQuery={setQuery} />

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
