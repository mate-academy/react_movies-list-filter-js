import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList/MoviesList';
import { Header } from './components/Header/Header';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();

  const visibleMovies = moviesFromServer.filter(movie => {
    if (!normalizedQuery) {
      return true;
    }

    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();

    return (
      title.includes(normalizedQuery) || description.includes(normalizedQuery)
    );
  });

  return (
    <div className="page">
      <div className="page-content">
        <Header query={query} setQuery={setQuery} />

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
