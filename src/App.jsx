import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const prepareAndFilterMovies = (movies, query) => {
  const search = query.toLowerCase().trim();

  return movies.filter(
    ({ title, description }) => title.trim().toLowerCase().includes(search)
    || description.trim().toLowerCase().includes(search),
  );
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = prepareAndFilterMovies(moviesFromServer, query);

  const handleOnChange = (e) => {
    setQuery(e.target.value);
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
                onChange={handleOnChange}
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
