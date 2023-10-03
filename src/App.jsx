import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilteredFilms(movies, query) {
  let visibleFilms = [...movies];

  if (query) {
    visibleFilms = visibleFilms
      .filter(film => film.title
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(query)
    || film.description
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(query));
  }

  return visibleFilms;
}

export const App = () => {
  const [filterField, setFilterField] = useState('');

  const visibleFilms = getFilteredFilms(moviesFromServer, filterField);

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
                  setFilterField(event.currentTarget.value
                    .toLowerCase()
                    .replace(/\s+/g, ''));
                }}
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
