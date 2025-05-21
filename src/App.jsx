import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchBar } from './components/SearchBar/SearchBar';

function getPreparedMovies(movies, { query }) {
  const trimmedQuery = query.trim().toLowerCase();

  if (!trimmedQuery) {
    return movies;
  }

  return movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(trimmedQuery) ||
      movie.description.toLowerCase().includes(trimmedQuery)
    );
  });
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getPreparedMovies(moviesFromServer, { query });

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
