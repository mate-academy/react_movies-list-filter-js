import './App.scss';

import { useState } from 'react';

import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

function getFilteredMovies(movies, { query }) {
  return [...movies]
    .filter(movie => movie.title
      .toLowerCase()
      .includes(query.toLowerCase()
        .trim())
      || movie.description
        .toLowerCase()
        .includes(query.toLowerCase()
          .trim()));
}

export const App = () => {
  const [query, setQuery] = useState('');
  const filteredMovies = getFilteredMovies(moviesFromServer, { query });

  const filterBy = (newQuery) => {
    setQuery(newQuery);
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
                onChange={(event) => {
                  filterBy(event.currentTarget.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
