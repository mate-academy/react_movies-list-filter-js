import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  function prepareMovies(movies, queryLine) {
    let preparedMovies = movies;

    if (queryLine) {
      const lowerCaseQuery = queryLine.trim().toLowerCase();

      preparedMovies = preparedMovies.filter(
        movie =>
          movie.title.toLowerCase().includes(lowerCaseQuery) ||
          movie.description.toLowerCase().includes(lowerCaseQuery),
      );
    }

    return preparedMovies;
  }

  const visibleMovies = prepareMovies(moviesFromServer, query);

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
                onChange={e => {
                  setQuery(e.currentTarget.value);
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
