import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const normalize = value => value.trim().toLowerCase();

export const App = () => {
  const [query, setQuery] = useState('');

  const normalizedQuery = normalize(query);

  const visibleMovies = moviesFromServer.filter(
    movie =>
      normalize(movie.title).includes(normalizedQuery) ||
      normalize(movie.description).includes(normalizedQuery),
  );

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
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
