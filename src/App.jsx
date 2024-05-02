import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  const handleInputChange = event => {
    const searchQuery = event.target.value.trim().toLowerCase();

    filterMovies(searchQuery);
  };

  const filterMovies = searchQuery => {
    const filteredMovies = moviesFromServer.filter(
      movie =>
        movie.title.toLowerCase().includes(searchQuery) ||
        movie.description.toLowerCase().includes(searchQuery),
    );

    setVisibleMovies(filteredMovies);
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
