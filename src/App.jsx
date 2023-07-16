import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedList(sourceList, query) {
  let preparedList = [...sourceList];
  const preparedQuery = query.trim().toLowerCase();
  const isIncludes = (str, value) => str.toLowerCase().includes(value);

  preparedList = preparedList
    .filter(({ title, description }) => (
      isIncludes(title, preparedQuery)
        || isIncludes(description, preparedQuery)
    ));

  return preparedList;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const filtredMovies = getPreparedList(moviesFromServer, query);

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
                  setQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filtredMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
