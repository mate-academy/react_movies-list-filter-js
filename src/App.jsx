import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Header } from './components/Header/Header';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const visibleQuery = [...moviesFromServer].filter(
    movie =>
      movie.title.toLowerCase().includes(searchQuery) ||
      movie.description.toLowerCase().includes(searchQuery),
  );

  return (
    <div className="page">
      <div className="page-content">
        <Header filterBy={setSearchQuery} />
        <MoviesList movies={visibleQuery} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
