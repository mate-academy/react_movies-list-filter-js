import { useState } from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

function getPreparedMovies(movies, { query }) {
  let preparedMovies = [...movies];

  if (query) {
    preparedMovies = preparedMovies.filter((movie) => {
      const title = movie.title.trim().toLowerCase();
      const description = movie.description.trim().toLowerCase();
      const searchTerm = query.trim().toLowerCase();

      return title.includes(searchTerm) || description.includes(searchTerm);
    });
  }

  return preparedMovies;
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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
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
