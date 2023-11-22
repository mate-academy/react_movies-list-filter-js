import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies, { query }) {
  const lowerQuery = query.toLowerCase().trim();
  const upperQuery = query.toUpperCase().trim();

  const preparedMovies = movies.filter(
    movie => (
      movie.title.toLowerCase().includes(lowerQuery)
      || movie.title.toUpperCase().includes(upperQuery))
      || (movie.description.toLowerCase().includes(lowerQuery
        || movie.description.toUpperCase().includes(upperQuery))
      ),
  );

  return preparedMovies;
}

export const App = () => {
  const [query, setQuerry] = useState('');

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
                value={query}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={(event) => {
                  setQuerry(event.currentTarget.value);
                }}
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
