import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setQuery(event.target.value); // Remove leading and trailing spaces
  };

  const visibleMovies = moviesFromServer.filter((movie) => {
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();
    const lowerCaseQuery = query.trim().toLowerCase();

    return title.includes(lowerCaseQuery)
      || description.includes(lowerCaseQuery);
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
                value={query}
                onChange={handleSearchInputChange}
              />
            </div>
          </div>
        </div>
        <MoviesList movies={visibleMovies} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
