import { useState } from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { SearchControl } from './components/SearchControl';

function getNormalizedString(string) {
  return string.toLowerCase().trim();
}

function getFilteredMovies(moviesList, { query }) {
  const normalizedQuery = getNormalizedString(query);

  const filteredMovies = moviesList.filter((movie) => {
    const normalizedTitle = getNormalizedString(movie.title);
    const normalizedDescription = getNormalizedString(movie.description);

    return normalizedTitle.includes(normalizedQuery)
          || normalizedDescription.includes(normalizedQuery);
  });

  return filteredMovies;
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

            <SearchControl
              value={query}
              onChange={(event) => {
                setQuery(event.currentTarget.value);
              }}
            />

          </div>
        </div>

        <MoviesList
          movies={visibleMovies}
          query={query}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
