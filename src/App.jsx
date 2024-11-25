import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function prepareMovies(movie, query) {
  let prepareMovie = movie;
  const normalizedQuery = query.trim().toLowerCase();

  if (normalizedQuery) {
    prepareMovie = prepareMovie.filter(move => {
      return (
        move.title.toLowerCase().includes(normalizedQuery) ||
        move.description.toLowerCase().includes(normalizedQuery)
      );
    });
  }

  return prepareMovie;
}

export const App = () => {
  const [queryString, setQuery] = useState('');
  const visibleMovies = prepareMovies(moviesFromServer, queryString);

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
                value={queryString}
                onChange={event => {
                  setQuery(event.target.value);
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
