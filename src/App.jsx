import { useState } from 'react';
// import cn from 'classnames';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilteredMovies(movies, query) {
  return movies.filter((movie) => {
    const queryToLowerCase = query.trim().toLowerCase();

    return (
      movie.title.toLowerCase().includes(queryToLowerCase)
      || movie.description.toLowerCase().includes(queryToLowerCase)
    );
  });
}

export const App = () => {
  const [query, setQuery] = useState('');

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
                  setQuery(event.currentTarget.value);
                }}
              />

            </div>
          </div>
        </div>

        <MoviesList movies={getFilteredMovies(moviesFromServer, query)} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
