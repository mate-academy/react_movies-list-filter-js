import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getVisibleMovies(movies, searchField) {
  let preparedMovies = [...movies];

  if (searchField) {
    preparedMovies = preparedMovies.filter(movie => {
      return (
        movie.title.toLowerCase().includes(searchField.toLowerCase().trim()) ||
        movie.description
          .toLowerCase()
          .includes(searchField.toLowerCase().trim())
      );
    });
  }

  return preparedMovies;
}

export const App = () => {
  const [searchField, setSearchField] = useState('');
  const visibleMovies = getVisibleMovies(moviesFromServer, searchField);

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
                value={searchField}
                onChange={event => {
                  setSearchField(event.currentTarget.value);
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
