import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filter(films, { query }) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) return films;

  return films.filter(film => {
    const title = film.title.toLowerCase();
    const desc = (film.description || '').toLowerCase();

    return title.includes(normalizedQuery) || desc.includes(normalizedQuery);
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filter(moviesFromServer, { query });

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
                onChange={event => {
                  setQuery(event.target.value);
                }}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        {/* <MoviesList movies={moviesFromServer} /> */}
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
