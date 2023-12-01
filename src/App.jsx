import { useState } from 'react';

import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

import './App.scss';

function handFilter(value) {
  let movies;

  if (value) {
    const lowercasedValue = value.trim().toLowerCase();

    movies = moviesFromServer.filter((movie) => {
      const includesName = movie.title
        && movie.title.toLowerCase().includes(lowercasedValue);
      const includesDescription = movie.description
        && movie.description.toLowerCase().includes(lowercasedValue);

      return includesName || includesDescription;
    });
  }

  return value ? movies : moviesFromServer;
}

export const App = () => {
  const [value, setValue] = useState('');
  const visibleMovies = handFilter(value);

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
                onChange={(event) => {
                  setValue(event.target.value);
                }}
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
