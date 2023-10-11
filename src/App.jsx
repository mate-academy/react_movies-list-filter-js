import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  const handleSearch = (event) => {
    const inputValue = event.target.value.trim().toLowerCase();

    const filteredMovies = moviesFromServer
      .filter((
        { title, description },
      ) => title.toLowerCase()
        .includes(inputValue)
      || description.toLowerCase()
        .includes(inputValue));

    setVisibleMovies(filteredMovies);
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label
              htmlFor="search-query"
              className="label"
            >
              Search movie
            </label>
            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={handleSearch}
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
