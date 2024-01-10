import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filterMovies = (movies, searchQuery) => {
  const filteredMovies = movies.filter((movie) => {
    const lowercaseQuery = searchQuery.trim().toLowerCase();
    const lowercaseTitle = movie.title.toLowerCase();
    const lowercaseDescription = movie.description.toLowerCase();

    return (
      lowercaseTitle.includes(lowercaseQuery)
      || lowercaseDescription.includes(lowercaseQuery)
    );
  });

  return filteredMovies;
};

export const App = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    setQuery(inputValue);
    const filteredMovies = filterMovies(moviesFromServer, inputValue);

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
