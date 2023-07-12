import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function checkSubstring(string, someQuery) {
  return string.toLowerCase().includes(someQuery);
}

function getFilteredMovies(movies, { query }) {
  let filteredMovies = [...movies];
  const trimedLowerQuery = query.toLowerCase().trim();

  if (query) {
    filteredMovies = filteredMovies.filter(
      movie => (
        checkSubstring(movie.title, trimedLowerQuery)
        || checkSubstring(movie.description, trimedLowerQuery)
      ),
    );
  }

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

            <div className="control">
              <input
                value={query}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={visibleMovies}
          // query={query}
          // filterBy={(newQuery) => {
          //   setQuery(newQuery);
          // }}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
