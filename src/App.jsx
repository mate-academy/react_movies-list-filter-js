import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchBar } from './components/SearchBar/SearchBar';

function getPreparedMovies(movies, query) {
  if (query) {
    return movies.filter(movie => {
      const preparedQuery = query.trim().toLowerCase();

      return (
        movie.title.toLowerCase().includes(preparedQuery) ||
        movie.description.toLowerCase().includes(preparedQuery)
      );
    });
  }

  return movies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getPreparedMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <SearchBar
          query={query}
          filterBy={newQuery => {
            setQuery(newQuery);
          }}
        />

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
