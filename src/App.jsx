import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { getVisibleMovies } from './utils';

export const App = () => {
  const [filterQuery, setFilterQuery] = useState('');
  const visibleMovies = getVisibleMovies({
    movies: moviesFromServer,
    filterQuery,
  });

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
                value={filterQuery}
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={event => {
                  setFilterQuery(event.target.value);
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
