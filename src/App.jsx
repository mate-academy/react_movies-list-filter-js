import React, { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchField } from './components/SearchField/SearchField';

function getPreparedMovies(movies, query) {
  const preparedMovies = [...movies];

  if (!query) {
    return movies;
  }

  const searchCondition = query.toLowerCase().trim();

  return preparedMovies.filter(
    movie => movie.title.toLowerCase().includes(searchCondition)
      || movie.description.toLowerCase().includes(searchCondition),
  );
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <SearchField filterBy={setQuery} />
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
