import React, { useState, useMemo } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies, query) {
  const doneQuery = query.toLowerCase().trim();

  if (query) {
    return movies.filter(
      movie => movie.title.toLowerCase().includes(doneQuery)
      || movie.description.toLowerCase().includes(doneQuery),
    );
  }

  return movies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies 
  = useMemo(() => getPreparedMovies(moviesFromServer, query), [
    query,
  ]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
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
                onChange={handleInputChange}
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
