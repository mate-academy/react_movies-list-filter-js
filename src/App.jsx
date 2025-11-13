import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

function prepareFilms(films, query) {
  let duplicateFilms = films;
  const normalizedQuery = query.trim().toLowerCase();

  if (normalizedQuery) {
    duplicateFilms = duplicateFilms.filter(film =>
      film.title.toLowerCase().includes(normalizedQuery) ||
      film.description.toLowerCase().includes(normalizedQuery),
    );
  }

  return duplicateFilms;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleFilms = prepareFilms(moviesFromServer, query);

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
                onChange={event => {
                  setQuery(event.target.value);
                }}
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
