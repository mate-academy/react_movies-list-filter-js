import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filterField = (list, query) => {
  let preparedList = [...list];

  if (query) {
    preparedList = preparedList.filter((elem) => {
      const processedQuery = query.trim().toLowerCase();

      return elem.title.toLowerCase().includes(processedQuery)
        || elem.description.toLowerCase().includes(processedQuery);
    });
  }

  return preparedList;
};

export const App = () => {
  const [query, setQuery] = useState('');

  const filteredList = filterField(moviesFromServer, query);

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
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
                className="input"
                placeholder="Type search word"
                value={query}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredList} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
