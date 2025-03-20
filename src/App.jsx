import { useState } from 'react';

import './App.scss';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function searchMovie(searchField, query) {
  return searchField.toLowerCase().includes(query);
}

export const App = () => {
  const [query, setQuery] = useState('');

  const preparedQuery = query.trim().toLowerCase();

  const visibleMovies = moviesFromServer.filter(
    movie =>
      searchMovie(movie.title, preparedQuery) ||
      searchMovie(movie.description, preparedQuery),
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
                value={query}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
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
