import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchBar } from './components/SearchBar';

function filterMovies(movies, query) {
  const searchQuery = query.trim().toLowerCase();

  return movies.filter(movie => movie.title.toLowerCase().includes(searchQuery)
  || movie.description.toLowerCase().includes(searchQuery));
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = filterMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <SearchBar setQuery={setQuery} />
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
