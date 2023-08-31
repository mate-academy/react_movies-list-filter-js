import { useState } from 'react';
import moviesFromServer from './api/movies.json';

import './App.scss';
import { MoviesList } from './components/MoviesList';

const includesQuery = (text, query) => {
  const preparedText = text.toLowerCase();
  const preparedQuery = query.toLowerCase();

  return preparedText.includes(preparedQuery);
};

function getPreparedMovies(movies, query) {
  const queryToLowerCase = query.trim();

  return movies.filter(({ title, description }) => {
    const hasSuitableTitle = includesQuery(title, queryToLowerCase);
    const hasSuitableDescription = includesQuery(description, queryToLowerCase);

    return hasSuitableTitle || hasSuitableDescription;
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(
    moviesFromServer,
    query,
  );

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
