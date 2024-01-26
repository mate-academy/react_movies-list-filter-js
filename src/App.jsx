import { useState } from 'react';

import './App.scss';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function moviesFilter(movies, query) {
  const quetyToLowerCase = query.toLowerCase();

  return movies.filter(movie => movie.title
    .toLowerCase()
    .includes(quetyToLowerCase)
    || movie.description
      .toLowerCase()
      .includes(quetyToLowerCase));
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = moviesFilter(moviesFromServer, query);

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
                  setQuery(event.target.value.trim());
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
