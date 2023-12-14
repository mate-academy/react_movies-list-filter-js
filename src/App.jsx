import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import './App.scss';

function getPreparedMoves(moves, query) {
  let getVisibleMovies = [...moves];
  const lowerQuery = query.toLowerCase();

  getVisibleMovies = getVisibleMovies.filter(
    move => move.title.toLowerCase().includes(lowerQuery.trim())
      || move.description.toLowerCase().includes(lowerQuery.trim()),
  );

  return getVisibleMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getPreparedMoves(moviesFromServer, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

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
                value={query}
                onChange={handleChange}
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
