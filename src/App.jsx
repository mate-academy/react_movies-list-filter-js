import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPrepareMovies(movies, { query }) {
  let preparedMovies = [...movies];

  if (query) {
    preparedMovies = preparedMovies.filter(movie => {
      const q = query.trim().toLowerCase();

      return (
        movie.title.toLowerCase().includes(q) || movie.description.includes(q)
      );
    });
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getPrepareMovies(moviesFromServer, { query });

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
                onChange={e => setQuery(e.target.value)}
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
