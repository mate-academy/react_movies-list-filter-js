import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMonies(movies, query) {
  const prepearedMonies = [...movies];
  const trimmedQuery = query.trim().toLowerCase();

  return prepearedMonies.filter(
    movie =>
      movie.title.toLowerCase().includes(trimmedQuery) ||
      movie.description.toLowerCase().includes(trimmedQuery),
  );
}

export const App = () => {
  const [queryFilter, setQueryFilter] = useState('');

  const visibleMovies = getPreparedMonies(moviesFromServer, queryFilter);

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
                onChange={e => setQueryFilter(e.target.value)}
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
