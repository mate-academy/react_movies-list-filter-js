import React, { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value.trim());
  };

  const visibleMovies = moviesFromServer.filter((movie) => {
    const lowerCaseQuery = query.toLowerCase();
    const lowerCaseTitle = movie.title.toLowerCase();
    const lowerCaseDescription = movie.description.toLowerCase();

    return (
      lowerCaseTitle.includes(lowerCaseQuery)
        || lowerCaseDescription.includes(lowerCaseQuery)
    );
  });

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
