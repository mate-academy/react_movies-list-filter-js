import React, { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [visibleMovies, setVisibleMovies] = useState([...moviesFromServer]);
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    let searchTerm = e.target.value.trimLeft();

    searchTerm = searchTerm.replace(/\s{2,}/g, ' '); // Замінюємо всі послідовності пробілів довжиною більше 2 на один пробіл

    setQuery(searchTerm);

    const filteredMovies = moviesFromServer.filter(movie => {
      const title = movie.title.toLowerCase();
      const description = movie.description.toLowerCase();

      return (
        title.includes(searchTerm.toLowerCase()) ||
        description.includes(searchTerm.toLowerCase())
      );
    });

    setVisibleMovies(filteredMovies);
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
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
