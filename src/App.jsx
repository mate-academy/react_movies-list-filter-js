import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  let visibleMovies = moviesFromServer;

  function getFilteredMovies(movies, queryElem) {
    const normalizedQuery = queryElem.trim().toLowerCase();

    const result = movies.filter(movie => {
      const normalizedMovieTitle = movie.title.toLowerCase();
      const normalizedMovieDescription = movie.description.toLowerCase();

      if (
        normalizedMovieDescription.includes(normalizedQuery) ||
        normalizedMovieTitle.includes(normalizedQuery)
      ) {
        return true;
      }

      return false;
    });

    return result;
  }

  if (query) {
    visibleMovies = getFilteredMovies(visibleMovies, query);
  }

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
                value={query}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={event => {
                  setQuery(event.target.value);
                }}
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
