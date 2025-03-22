import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function preparedMovies(movies, query) {
  let resultMovies = movies;

  // NOTE: remove trim() for movie.title and movie.description if needed.
  if (query) {
    resultMovies = resultMovies.filter(
      movie =>
        movie.title.toLowerCase().trim().includes(query.trim().toLowerCase()) ||
        movie.description
          .toLowerCase()
          .trim()
          .includes(query.trim().toLowerCase()),
    );
  }

  return resultMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = preparedMovies(moviesFromServer, query);

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
