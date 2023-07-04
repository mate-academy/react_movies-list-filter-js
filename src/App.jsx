import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const normalizeText = text => (
  text
    .trim()
    .toLowerCase()
);

const isMovieMatchQuery = (movie, query) => {
  const normalizedQuery = normalizeText(query);
  const normalizedTitle = normalizeText(movie.title);
  const normalizedDescription = normalizeText(movie.description);

  return (
    normalizedTitle.includes(normalizedQuery)
    || normalizedDescription.includes(normalizedQuery)
  );
};

export const filterMovies = (movies, query) => {
  let visibleMovies = [...movies];

  if (query.length) {
    visibleMovies = visibleMovies.filter(
      movie => isMovieMatchQuery(movie, query),
    );
  }

  return visibleMovies;
};

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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={(event) => {
                  setQuery(event.target.value);
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
