import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function gerPreparedMovie(movies, query) {
  let prepareMovies = [...movies];

  if (query) {
    prepareMovies = prepareMovies.filter(movie => movie
      .title.toLowerCase().includes(query.toLowerCase())
      || movie.description.toLowerCase().includes(query.toLowerCase()));
  }

  return prepareMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = gerPreparedMovie(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div
            className="field"
            filterBy={(newQuery) => {
              setQuery(newQuery);
            }}
          >
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                query={query}
                onChange={event => setQuery(event.target.value.trim())}
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
