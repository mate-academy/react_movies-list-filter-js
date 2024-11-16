import './App.scss';

import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getPrepareMovies = (goods, { query }) => {
  const prepareMovies = [...goods];

  if (query) {
    return prepareMovies.filter(
      movie =>
        movie.title.toLowerCase().trim().includes(query.toLowerCase().trim()) ||
        movie.description
          .toLowerCase()
          .trim()
          .includes(query.toLowerCase().trim()),
    );
  }

  return prepareMovies;
};

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
                onChange={event => setQuery(event.target.value)}
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
