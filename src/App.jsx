import { useState, useEffect, useMemo } from 'react';

import './App.scss';

import { MoviesList } from './components/MoviesList';
import { MovieSearch } from './components/MovieSearch/MovieSearch';

import moviesFromServer from './api/movies.json';

function debounce(func, delay) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

function getPreparedMovies(movies, { query }) {
  let preparedMovies = movies;

  if (query) {
    const lowerQuery = query.trim().toLowerCase();

    preparedMovies = preparedMovies.filter(
      movie =>
        movie.title.toLowerCase().includes(lowerQuery) ||
        movie.description.toLowerCase().includes(lowerQuery),
    );
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebounceQuery] = useState('');

  const debouncedSetQuery = useMemo(
    () => debounce(value => setDebounceQuery(value), 400),
    [],
  );

  useEffect(() => {
    debouncedSetQuery(query);
  }, [query]);

  const visibleMovies = getPreparedMovies(moviesFromServer, {
    query: debouncedQuery,
  });

  return (
    <div className="page">
      <div className="page-content">
        <MovieSearch
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
