import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilteredMovies(movies, query) {
  const newQuery = query.toLowerCase().trim();

  return movies.filter(({ title, description }) => {
    return (
      title.toLowerCase().includes(newQuery) ||
      description.toLowerCase().includes(newQuery)
    );
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovie = getFilteredMovies(moviesFromServer, query);

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
                onChange={event => {
                  setQuery(event.target.value);
                }}
              />
            </div>
          </div>

          <MoviesList movies={visibleMovie} />
        </div>
        <div className="sidebar">Sidebar goes here</div>
      </div>
    </div>
  );
};
