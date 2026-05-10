import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedFilms(films, { sortFilm, query }) {
  let preparedFilms = [...films];

  if (sortFilm) {
    preparedFilms = preparedFilms.filter(film => film.title === sortFilm);
  }

  if (query) {
    const normalizedQuery = query.trim().toLowerCase();

    preparedFilms = preparedFilms.filter(film => {
      const normalizedTitle = film.title.toLowerCase();
      const normalizedDescription = film.description.toLowerCase();

      return (
        normalizedTitle.includes(normalizedQuery) ||
        normalizedDescription.includes(normalizedQuery)
      );
    });
  }

  return preparedFilms;
}

export const App = () => {
  const [sortFilm, setSortFilm] = useState('');
  const [query, setQuery] = useState('');

  const visibleFilms = getPreparedFilms(moviesFromServer, { sortFilm, query });

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
                onChange={event => {
                  setQuery(event.currentTarget.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={visibleFilms}
          sortFilm={film => {
            setSortFilm(film);
          }}
        />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
