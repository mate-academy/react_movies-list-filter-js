import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredMovies = moviesFromServer.filter(
    (movie) => {
      const lowerCaseQuery = query.toLowerCase().trim();

      return (
        movie.title.toLowerCase().includes(lowerCaseQuery)
        || movie.description.toLowerCase().includes(lowerCaseQuery)
      );
    },
  );

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
                onChange={handleQueryChange}
              />
            </div>
          </div>
        </div>
        <MoviesList movies={filteredMovies} />
      </div>
      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
