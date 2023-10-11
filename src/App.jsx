import './App.scss';
import React, { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilterMovie(movies, query) {
  let movieFilter = [...movies];

  if (query) {
    const normalizeQuery = query.toLowerCase().trim();

    movieFilter = movieFilter.filter(movie => (
      movie.title.toLowerCase().includes(normalizeQuery)
      || movie.description.toLowerCase().includes(normalizeQuery)
    ));
  }

  return movieFilter;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const movieForRendering = getFilterMovie(moviesFromServer, query);

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
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movieForRendering} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
