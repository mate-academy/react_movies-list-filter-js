import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getValidatedStr = str => str.toLowerCase().trim();

const filteredMovies = (movies, { query }) => (
  movies.filter(({ title, description }) => (
    getValidatedStr(title).includes(getValidatedStr(query))
  || getValidatedStr(description).includes(getValidatedStr(query))
  ))
);

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filteredMovies(moviesFromServer, { query });

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    setQuery(inputValue);
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

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
