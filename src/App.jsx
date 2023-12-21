import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function makeWordLowerCaseAndNoSpasesAround(word) {
  return word.trim().toLowerCase();
}

function filterMoovies(moovies, query) {
  let filteredMoovies = [...moovies];

  if (!query) {
    return filteredMoovies;
  }

  const convertedQuery = makeWordLowerCaseAndNoSpasesAround(query);

  filteredMoovies = filteredMoovies.filter(({ title, description }) => (
    makeWordLowerCaseAndNoSpasesAround(description).includes(convertedQuery)
      || makeWordLowerCaseAndNoSpasesAround(title).includes(convertedQuery)));

  return filteredMoovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMoovies = filterMoovies(moviesFromServer, query);

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

        <MoviesList movies={visibleMoovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
