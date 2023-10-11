import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilteredMovies(movies, query) {
  let filteredMovies = [...moviesFromServer];

  if (query) {
    const validQuery = query.trim().toLocaleLowerCase();

    filteredMovies = filteredMovies.filter(
      movie => movie.title.toLocaleLowerCase().includes(validQuery)
      || movie.description.toLocaleLowerCase().includes(validQuery),
    );
  }

  return filteredMovies;
}

export const App = () => {
  const [filterBy, setFilterBy] = useState('');
  const visibleMovies = getFilteredMovies(moviesFromServer, filterBy);

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
                onChange={(event) => {
                  setFilterBy(event.target.value);
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
