import './App.scss';
import { useState } from 'react';
import moviesFromServer from './api/movies.json';
import { SearchBar } from './components/SearchBar/SearchBar';
import { MoviesList } from './components/MoviesList';

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = moviesFromServer.filter(movie => {
    const normalizedQuery = query.trim().toLowerCase();

    return (
      movie.title.toLowerCase().includes(normalQuery) ||
      movie.description.toLowerCase().includes(normalQuery)
    );
  });

  return (
    <div className="page">
      <div className="page-content">
        <SearchBar query={query} onQueryChange={setQuery} />
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
