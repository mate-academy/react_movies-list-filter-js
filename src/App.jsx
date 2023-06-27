import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilms(movies, query) {
  const newQuery = query.toLowerCase().trim();

  if (newQuery) {
    return movies.filter(element => (
      element.title.toLowerCase().includes(newQuery)
        || element.description.toLowerCase().includes(newQuery)
    ));
  }

  return movies;
}

export const App = () => {
  const [sortField, setFilter] = useState('');
  const visibleMovies = getFilms(moviesFromServer, sortField);

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
                onChange={(letter) => {
                  setFilter(letter.target.value);
                }}
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
