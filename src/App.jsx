import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovie(movies, query) {
  return movies.filter(
    m =>
      new RegExp(query.trim(), 'i').test(m.title) ||
      new RegExp(query.trim(), 'i').test(m.description),
  );
}

export const App = () => {
  let visibleMovies = [...moviesFromServer];
  const [query, setQuery] = useState('');

  visibleMovies = filterMovie(visibleMovies, query);

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
