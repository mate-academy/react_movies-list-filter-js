import './App.scss';
import { useState } from 'react';
import moviesFromServer from './api/movies.json';
import { SearchBar } from './components/SearchBar/SearchBar';
import { MoviesList } from './components/MoviesList';

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = moviesFromServer.filter(movie => {
    const titleIncludesQuery = movie.title
      .toLowerCase()
      .includes(query.trim().toLowerCase());
    const descriptionIncludesQuery = movie.description
      .trim()
      .toLowerCase()
      .includes(query.trim().toLowerCase());

    return titleIncludesQuery || descriptionIncludesQuery;
  });

  return (
    <div className="page">
      <div className="page-content">
        <SearchBar query={query} setQuery={setQuery} />
        <MoviesList movies={visibleMovies} />
      </div>
      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
