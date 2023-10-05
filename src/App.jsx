import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getPreparedMovies = (movies, query) => {
  let preparedMovies = [...movies];

  if (query) {
    preparedMovies = preparedMovies.filter((movie) => {
      const description = movie.description.toLowerCase();
      const title = movie.title.toLowerCase();
      const normalizedQuery = query.trim().toLowerCase();

      return description.includes(normalizedQuery)
      || title.includes(normalizedQuery);
    });
  }

  return preparedMovies;
};

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

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={(event) => {
                  setQuery(event.target.value);
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
}
