import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const lowerQuery = query.toLowerCase();

  const visiblelMovies = moviesFromServer.filter(
    movie => movie.title.toLowerCase().includes(lowerQuery)
    || movie.description.toLowerCase().includes(lowerQuery),
  );

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
                  setQuery((event.target.value.trim()));
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visiblelMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
