import './App.scss';
import { useState } from 'react';

import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

function getPreparedMovies(movies, queryToFilter) {
  let preparedMovies = [...movies];

  if (queryToFilter) {
    const trimmedLowerCaseQuery = queryToFilter.toLowerCase().trim();

    preparedMovies = preparedMovies.filter(movie => (
      movie.title.toLowerCase().includes(trimmedLowerCaseQuery)
        || movie.description.toLowerCase().includes(trimmedLowerCaseQuery)));
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(
    moviesFromServer,
    query,
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
                value={query}
                onChange={event => setQuery(event.target.value)}
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
