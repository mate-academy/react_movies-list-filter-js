import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const caseForQuery = (str, query) => {
    const lowerCaseStr = str.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();

    return lowerCaseStr.includes(lowerCaseQuery);
  };

  const getPreparedMovies = (movies, { query }) => {
    const queryToLowerCase = query.toLowerCase().trim();

    return movies.filter(({ title, description }) => {
      const hasMatchingTitle = caseForQuery(title, queryToLowerCase);
      const hasMatchingDescription
        = caseForQuery(description, queryToLowerCase);

      return hasMatchingTitle || hasMatchingDescription;
    });
  };

  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, { query });

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
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
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
