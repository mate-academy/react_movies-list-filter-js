import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedFilms(films, filterQuery) {
  let preparedFilms = [...films];

  if (filterQuery) {
    preparedFilms = preparedFilms.filter(film => {
      const a = film.title.toLowerCase();
      const b = film.description.toLowerCase();
      const c = filterQuery.toLowerCase().trim();

      return a.includes(c) || b.includes(c);
    });
  }

  return preparedFilms;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleFilms = getPreparedFilms(moviesFromServer, query);

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
                onChange={event => setQuery(event.target.value)}
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
