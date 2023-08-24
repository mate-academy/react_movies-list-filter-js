import { useState } from 'react';

import moviesFromServer from './api/movies.json';

import { MoviesList } from './components/MoviesList';

import { getPreparedMovies } from './utils/movieUtils';

import './App.scss';

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, { query });

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
                value={query}
                id="search-query"
                onChange={event => setQuery(event.currentTarget.value)}
                className="input"
                placeholder="Type search word"
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
