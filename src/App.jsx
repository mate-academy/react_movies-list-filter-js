import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(query) {
  let preparedMovies = moviesFromServer;

  if (query) {
    preparedMovies
      = moviesFromServer.filter((movie) => {
        const lowerCaseTitle = movie.title.toLowerCase();
        const lowerCaseDescription = movie.description.toLowerCase();

        return lowerCaseTitle.includes(query.toLowerCase().trim())
        || lowerCaseDescription.includes(query.toLowerCase().trim());
      });
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleGoods = filterMovies(query);

  const filterBy = (newQuery) => {
    setQuery(newQuery);
  };

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
                  filterBy(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleGoods} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
