import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getVisibleMovies(listMovies, query) {
  const foundMovie = listMovies.filter(
    value =>
      value.title.toLowerCase().includes(query.toLowerCase().trim()) ||
      value.description.toLowerCase().includes(query.toLowerCase().trim()),
  );

  return foundMovie;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getVisibleMovies(moviesFromServer, query);

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

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
