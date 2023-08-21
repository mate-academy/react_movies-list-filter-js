import React, { useState, useMemo } from 'react';
import { MoviesList } from './components/MoviesList';
import './App.scss';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies, { query }) {
  let preparedMovies = [...movies];

  if (query) {
    const trimmedQuery = query.toLowerCase().trim();

    preparedMovies = preparedMovies.filter(({ title, description }) => {
      const lowercaseTitle = title.toLowerCase();
      const lowercaseDescription = description.toLowerCase();

      return lowercaseTitle.includes(trimmedQuery)
        || lowercaseDescription.includes(trimmedQuery);
    });
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = useMemo(
    () => getPreparedMovies(moviesFromServer, { query }),
    [query],
  );
  const changeQuery = (event) => {
    setQuery(event.target.value);
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
                onChange={changeQuery}
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={visibleMovies}
          filterBy={(newQuery) => {
            setQuery(newQuery);
          }}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
