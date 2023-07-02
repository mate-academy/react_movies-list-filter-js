import './App.scss';
import { useState } from 'react';

import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { FilterField } from './components/FilterField/FilterField';

function filterMovies(movies, { query }) {
  if (query) {
    const queryToLoverAndTrimed = query.trim().toLowerCase();

    return movies.filter(
      movie => movie.title.toLowerCase().includes(queryToLoverAndTrimed)
        || movie.description.toLowerCase().includes(queryToLoverAndTrimed),
    );
  }

  return movies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterMovies(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="page-content">
        <FilterField filterBy={setQuery} />

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
