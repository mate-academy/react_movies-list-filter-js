import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getVisibleMovies(movies, query) {
  let preparedMovies = [...movies];

  if (query) {
    const normalizedQuery = query.trim().toLowerCase();

    preparedMovies = preparedMovies.filter(
      ({ title, description }) => (
        title.toLowerCase().includes(normalizedQuery)
          || description.toLowerCase().includes(normalizedQuery)
      ),
    );
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  function handleChange(event) {
    setQuery(event.target.value);
  }

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
                value={query}
                onChange={handleChange}
                type="text"
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
