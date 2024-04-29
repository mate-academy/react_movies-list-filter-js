import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import { Header } from './components/Header';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = [...moviesFromServer].filter(
    movie =>
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.description.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="page">
      <div className="page-content">
        <Header setQuery={setQuery} />

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
