import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function visibleMovies(movies, query) {
  const trimmedQuery = query.trim().toLowerCase();

  if (!query) {
    return movies;
  }

  return movies.filter(
    movie =>
      movie.title.toLowerCase().includes(trimmedQuery) ||
      movie.description.toLowerCase().includes(trimmedQuery),
  );
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMoviesList = visibleMovies(moviesFromServer, query);

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
                onChange={e => {
                  setQuery(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMoviesList} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
