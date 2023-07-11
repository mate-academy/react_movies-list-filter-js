import { useState } from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

function checkSubstring(string, someQuery) {
  return string.toLowerCase().includes(someQuery);
}

function getFilteredMovies(movies, { query }) {
  const trimedLowerQuery = query.toLowerCase().trim();
  const filteredMovies = movies.filter(movie => (
    checkSubstring(movie.title, trimedLowerQuery)
      || checkSubstring(movie.description, trimedLowerQuery)
  ));

  return filteredMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getFilteredMovies(
    moviesFromServer,
    { query },
  );

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={(event) => {
                  setQuery(event.currentTarget.value);
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
