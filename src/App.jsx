import { useState } from 'react';
// import { event } from 'cypress/types/jquery';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getMovies(movies, query) {
  let preparedMovies = [...movies];

  if (query) {
    preparedMovies = preparedMovies
      .filter(movie => movie.title.toLowerCase()
        .includes(query.trim().toLowerCase())
        || movie.description.toLowerCase()
          .includes(query.trim().toLowerCase()));
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getMovies(moviesFromServer, query);
  const handleOnChange = (event) => {
    setQuery(event.currentTarget.value);
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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={handleOnChange}
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
