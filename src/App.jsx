import { useState } from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { MovieFilter } from './components/MovieFilter/MovieFilter';

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

            <MovieFilter query={query} setFilter={setQuery} />
          </div>
        </div>

        <MoviesList movies={moviesFromServer} query={query} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
