import { useState, useMemo } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = useMemo(() => moviesFromServer.filter((movie) => {
    const queryToLowerCase = query.trim().toLowerCase();
    const titleToLowerCase = movie.title.toLowerCase();
    const descrToLowerCase = movie.description.toLowerCase();

    return (
      titleToLowerCase.includes(queryToLowerCase)
      || descrToLowerCase.includes(queryToLowerCase)
    );
  }), [moviesFromServer, query]);

  const filterHandler = (event) => {
    setQuery(event.target.value);
  };

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
                value={query}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={filterHandler}
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
