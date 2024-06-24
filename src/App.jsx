import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getFilteredMovies = query => {
  const movies = moviesFromServer;
  const fixedQuery = query.trim().toLowerCase();

  const filteredMovies = movies.filter(
    ({ title, description }) =>
      title.toLowerCase().includes(fixedQuery) ||
      description.toLowerCase().includes(fixedQuery),
  );

  return filteredMovies;
};

export const App = () => {
  const [query, setQuery] = useState('');

  const filteredMovies = getFilteredMovies(query);

  const onSearch = event => {
    const { value } = event.target;

    setQuery(value);
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
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
                onChange={onSearch}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
