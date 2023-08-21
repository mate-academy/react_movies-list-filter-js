import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const EMPTY_VALUE = '';

const findSubstr = (str, substr) => str.toLowerCase().includes(substr);

const moviesFilter = (movies, { query }) => {
  const arrOfMovies = [...movies];
  const filterQuery = query.trim().toLowerCase();

  if (!query) {
    return arrOfMovies;
  }

  return arrOfMovies.filter(movie => findSubstr(movie.title, filterQuery)
    || findSubstr(movie.description, filterQuery));
};

export const App = () => {
  const [query, setQuery] = useState(EMPTY_VALUE);
  const visibleMovies = moviesFilter(moviesFromServer, { query });

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
                onChange={event => setQuery(event.target.value)}
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
