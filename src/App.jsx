import { useState } from 'react';

import moviesFromServer from './api/movies.json';

import { MoviesList } from './components/MoviesList';
import './App.scss';

function getPreparedMovies(movies, { query }) {
  const preparedQuery = query.trim().toLowerCase();

  if (query) {
    return movies.filter(movie => (
      movie.title.toLowerCase().includes(preparedQuery)
      || movie.description.toLowerCase().includes(preparedQuery)
    ));
  }

  return movies;
}

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
                query={query}
                type="text"
                onChange={event => setQuery(event.target.value)}
                id="search-query"
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
