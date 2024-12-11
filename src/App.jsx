import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const visibleMovies = (moviesFrom, query) => {
  const filteredMovies = [...moviesFrom];

  if (query) {
    return filteredMovies.filter(
      movie =>
        movie.title.trim().toLowerCase().includes(query.trim().toLowerCase()) ||
        movie.description
          .trim()
          .toLowerCase()
          .includes(query.trim().toLowerCase()),
    );
  }

  return filteredMovies;
};

export const App = () => {
  const [query, setQuery] = useState('');

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
                value={query}
                onChange={event => {
                  setQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies(moviesFromServer, query)} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
