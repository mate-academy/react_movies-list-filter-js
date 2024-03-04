import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  function getMovie(searchQuery) {
    let prepearesMovie = [...moviesFromServer];

    if (searchQuery) {
      const toLowerCaseQuery = searchQuery.trim().toLowerCase();

      prepearesMovie = prepearesMovie.filter(
        movie =>
          movie.title.trim().toLowerCase().includes(toLowerCaseQuery) ||
          movie.description.trim().toLowerCase().includes(toLowerCaseQuery),
      );
    }

    return prepearesMovie;
  }

  const visibleMovies = getMovie(query);

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
                onChange={event => setQuery(event.target.value)}
                id="search-query"
                className="input"
                placeholder="Type search word"
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
