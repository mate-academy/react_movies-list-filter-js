import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const convertToLower = text => {
  return text.toLowerCase();
};

const visibleMovies = (movies, query) => {
  let preparedMovies = movies;

  const preparedQuery = query.trim();

  if (query) {
    preparedMovies = movies.filter(movie => {
      if (convertToLower(movie.title).includes(convertToLower(preparedQuery))) {
        return movie;
      }

      if (
        convertToLower(movie.description).includes(
          convertToLower(preparedQuery),
        )
      ) {
        return movie;
      }

      return 0;
    });
  }

  return preparedMovies;
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
