import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import { SearchMovie } from './components/SearchMovie';

import moviesFromServer from './api/movies.json';

export const App = () => {
  const [movies] = useState(moviesFromServer);
  const [query, setQuery] = useState('');

  const preparedMovies = (moviesList, searchQuery) => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (normalizedQuery) {
      return moviesList.filter(
        movie =>
          movie.title.toLowerCase().includes(normalizedQuery) ||
          movie.description.toLowerCase().includes(normalizedQuery),
      );
    }

    return moviesList;
  };

  const visibleMovies = preparedMovies(movies, query);

  return (
    <div className="page">
      <div className="page-content">
        <SearchMovie setQuery={setQuery} />

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
