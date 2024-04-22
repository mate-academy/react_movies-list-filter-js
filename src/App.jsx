import { useState } from 'react';
import moviesFromServer from './api/movies.json';

import { MoviesList } from './components/MoviesList';

import './App.scss';

function searchMovies(movies, query) {
  return movies.filter(movie => {
    const movieTitle = movie.title
      .toLowerCase()
      .includes(query.trim().toLowerCase());
    const movieDescription = movie.description
      .toLowerCase()
      .includes(query.trim().toLowerCase());

    return movieTitle || movieDescription;
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = searchMovies(moviesFromServer, query);

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
                onChange={event => {
                  setQuery(event.target.value.toLowerCase());
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
