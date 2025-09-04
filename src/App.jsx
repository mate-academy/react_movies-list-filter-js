/* eslint no-console: ["error", { allow: ["warn", "log"] }] */
import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const normalize = s => s.toLowerCase();

const getFilteredMovies = (movies, query) => {
  const normalizedQuery = normalize(query.trim());

  if (!normalizedQuery) {
    return movies;
  }

  const filteredMovies = movies.filter(
    movie =>
      normalize(movie.title).includes(normalizedQuery) ||
      normalize(movie.description).includes(normalizedQuery),
  );

  return filteredMovies;
};

export const App = () => {
  const [query, setQuery] = useState('');

  const handleChange = event => setQuery(event.target.value);

  const movies = getFilteredMovies(moviesFromServer, query);

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
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
