import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilterResult(movieProperty, preparedQuery) {
  return movieProperty.toLowerCase().includes(preparedQuery);
}

function getFilteredMovies(movies, query) {
  const normalizedQuery = query.toLowerCase().trim();

  const isMatchingMovie = ({ title, description }) => (
    getFilterResult(title, normalizedQuery)
    || getFilterResult(description, normalizedQuery));

  return movies.filter(isMatchingMovie);
}

export const App = () => {
  const [queryState, setQueryState] = useState('');
  const visibleMovies = getFilteredMovies(moviesFromServer, queryState);

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
                value={queryState}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={(event) => {
                  setQueryState(event.target.value);
                }}
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
