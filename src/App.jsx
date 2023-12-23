import React, { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getSortedMovies(movies, parameter) {
  let copyOfList = [...movies];

  if (parameter) {
    copyOfList
      = copyOfList.filter(movie => movie.title.toLowerCase().includes(parameter)
      || movie.description.toLowerCase().includes(parameter));
  }

  return copyOfList;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const toLowerQuery = query.trim().toLowerCase();

  const visibleMovies = getSortedMovies(moviesFromServer, toLowerQuery);

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
                onChange={e => (
                  setQuery(e.target.value)
                )}
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
