import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const preparedFilms = (movies, query) => {
  let preparedMovies = [...movies];
  const quaryNormalized = query.toLowerCase().trim();

  if (query) {
    preparedMovies = preparedMovies.filter(movie => movie
      .title.toLowerCase().includes(quaryNormalized)
      || movie.description.toLowerCase().includes(quaryNormalized));
  }

  return preparedMovies;
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleFilms = preparedFilms(moviesFromServer, query);

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
                onChange={(event) => {
                  setQuery(event.currentTarget.value);
                }}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleFilms} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
