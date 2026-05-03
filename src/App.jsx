import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedFilms(films, query) {
  let preparedFilms = [...films];

  if (query) {
    const trimmedQuery = query.trim();

    preparedFilms = preparedFilms.filter(
      film =>
        film.title.toLowerCase().includes(trimmedQuery.toLowerCase()) ||
        film.description.toLowerCase().includes(trimmedQuery.toLowerCase()),
    );
  }

  return preparedFilms;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const movies = getPreparedFilms(moviesFromServer, query);

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

        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
