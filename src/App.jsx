import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value; // Remove leading and trailing spaces

    setQuery(inputValue);
  };

  const visibleMovies = moviesFromServer.filter((movie) => {
    const normalizedQuery = query.trim().toLowerCase(); // Convert query to lowercase and remove spaces

    // Check if movie title or description contains the query (case insensitive)
    return (
      movie.title.toLowerCase().includes(normalizedQuery)
      || movie.description.toLowerCase().includes(normalizedQuery)
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
