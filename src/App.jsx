import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function prepareMovies(movies, { query }) {
  let preparedMovies = [...movies];
  const normalQuery = query.trim().toLowerCase();

  if (normalQuery) {
    preparedMovies = preparedMovies.filter(
      movie =>
        movie.title.toLowerCase().includes(normalQuery) ||
        movie.description.toLowerCase().includes(normalQuery),
    );
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = prepareMovies(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
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
