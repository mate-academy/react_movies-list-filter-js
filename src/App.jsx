import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies, query) {
  return movies.filter((movie) => {
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();

    return title.includes(query) || description.includes(query);
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const correctQuery = query.toLowerCase().trim();
  const visibleMovies = getPreparedMovies(moviesFromServer, correctQuery);

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
                value={query}
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
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
