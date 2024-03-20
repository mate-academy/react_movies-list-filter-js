import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import './App.scss';
import moviesFromServer from './api/movies.json';

function filterMovies(movies, query) {
  return movies.filter(movie => {
    const titleMovie = movie.title
      .toLowerCase()
      .includes(query.trim().toLowerCase());
    const bodyMovie = movie.description
      .toLowerCase()
      .includes(query.trim().toLowerCase());

    return titleMovie || bodyMovie;
  });
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = filterMovies(moviesFromServer, query);

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
                  setQuery(event.currentTarget.value);
                }}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
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
