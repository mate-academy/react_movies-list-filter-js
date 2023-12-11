import './App.scss';
import { useState } from 'react';

import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

function getPreparedMoviesList(movies, { query }) {
  let preparedMoviesList = [...movies];

  const queryToLower = query.toLowerCase().trim();

  if (query) {
    preparedMoviesList = preparedMoviesList.filter(
      movie => movie.title.toLowerCase().includes(queryToLower)
    || movie.description.toLowerCase().includes(queryToLower),
    );
  }

  return preparedMoviesList;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMoviesList = getPreparedMoviesList(
    moviesFromServer, { query },
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

        <MoviesList movies={visibleMoviesList} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
