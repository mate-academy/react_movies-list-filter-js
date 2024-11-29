import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function sanitize(value) {
  return value.toLowerCase().trim();
}

function filterFilmList(films, { filterValue }) {
  return films.filter(film => {
    const description = sanitize(film.description);
    const title = sanitize(film.title);
    const filter = sanitize(filterValue);

    return title.includes(filter) || description.includes(filter);
  });
}

export const App = () => {
  const [filterValue, setFilterValue] = useState('');

  const movies = filterValue
    ? filterFilmList(moviesFromServer, { filterValue })
    : moviesFromServer;

  function inputChangeHandler(e) {
    setFilterValue(e.target.value);
  }

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
                value={filterValue}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
