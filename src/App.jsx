import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilterMovie(movies, query) {
  function getFormatString(string) {
    return string.trim().toLowerCase();
  }

  const formatedQuery = getFormatString(query);

  return movies.filter(
    ({ title, description }) =>
      getFormatString(title).includes(formatedQuery) ||
      getFormatString(description).includes(formatedQuery),
  );
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getFilterMovie(moviesFromServer, query);

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
                onChange={event => setQuery(event.currentTarget.value)}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
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
