import React, { useState, useEffect } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState([]);

  useEffect(() => {
    setVisibleMovies(filterMovies(moviesFromServer, query));
  }, [query]);

  const handleSearchInputChange = event => {
    const newQuery = event.target.value;

    setQuery(newQuery);
  };

  // eslint-disable-next-line no-shadow
  const filterMovies = (movies, query) => {
    if (!query) {
      return movies;
    }

    const normalizedQuery = query.toLowerCase().trim();

    return movies.filter(
      movie =>
        movie.title.toLowerCase().includes(normalizedQuery) ||
        movie.description.toLowerCase().includes(normalizedQuery),
    );
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={handleSearchInputChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
