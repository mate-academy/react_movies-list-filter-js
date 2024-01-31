import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPrepareMovies(movies, query) {
  let prepareMovies = [...movies];
  const correctQuery = query.trim().toLowerCase();

  prepareMovies = prepareMovies
    .filter(movie => movie.title.toLowerCase().includes(correctQuery)
      || movie.description.toLowerCase().includes(correctQuery));

  return prepareMovies;
}

export const App = () => {
  const [value, setValue] = useState('');
  const movies = getPrepareMovies(moviesFromServer, value);

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
                onChange={event => setValue(event.target.value)}
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={movies}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
