import { useState } from 'react';
import './App.scss';

import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

function getPreparedMovies(movies, query) {
  let preparedMovies = [...movies];
  const preparedQuery = query.toLowerCase().trim();

  if (query) {
    preparedMovies = preparedMovies.filter((movie) => {
      if (movie.title.toLowerCase().includes(preparedQuery)) {
        return movie.title.toLowerCase().includes(preparedQuery);
      }

      if (movie.description.toLowerCase().includes(preparedQuery)) {
        return movie.description.toLowerCase().includes(preparedQuery);
      }

      return false;
    });
  }

  return preparedMovies;
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

            <div className="control">
              <input
                value={query}
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

        <MoviesList
          movies={visibleMovies}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
