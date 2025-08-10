import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function prepareFilms(films, query) {
  let preparedFilms = films;
  const normalizedQuery = query.trim().toLowerCase();

  if (normalizedQuery) {
    preparedFilms = preparedFilms.filter(film => {
      return (
        film.title.toLowerCase().includes(normalizedQuery) ||
        film.description.toLowerCase().includes(normalizedQuery)
      );
    });
  }

  return preparedFilms;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = prepareFilms(moviesFromServer, query);

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
                  setQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
