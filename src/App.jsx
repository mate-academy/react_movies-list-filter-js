import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilteredFilms(films, { query }) {
  let preparedFilms = [...films];

  if (query) {
    preparedFilms = preparedFilms.filter(
      film =>
        film.title.toLowerCase().includes(query) ||
        film.description.toLowerCase().includes(query),
    );
  }

  return preparedFilms;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleFilms = getFilteredFilms(moviesFromServer, { query });

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
                onChange={event => {
                  setQuery(event.target.value.toLowerCase().trim());
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

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
