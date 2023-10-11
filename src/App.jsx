import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilteredMovies(movies, { query }) {
  let visibleMovies = [...movies];
  const queryOrganised = query.trim().toLowerCase();

  if (query) {
    visibleMovies = visibleMovies
      .filter(movie => movie.title.toLowerCase().includes(queryOrganised)
      || movie.description.toLowerCase().includes(queryOrganised));
  }

  return visibleMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getFilteredMovies(moviesFromServer, { query });

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
                onChange={(event) => {
                  setQuery(event.currentTarget.value);
                }}
                id="search-query"
                className="input"
                placeholder="Type search word"
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
