import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function preperedFilms(films, query) {
  const complatedQuery = query.trim().toUpperCase();
  const comletedFilms = films.map(film => ({
    ...film,
    textFull: `${film.title + film.description}`,
  }));

  return comletedFilms.filter(film =>
    film.textFull.toUpperCase().includes(complatedQuery),
  );
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleFilms = preperedFilms(moviesFromServer, query);

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
                onChange={event => {
                  setQuery(event.target.value);
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
