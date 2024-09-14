import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getMovieByQuery = (movies, query) => {
  const formattedQuery = query.trim().toLowerCase();

  if (!formattedQuery) {
    return movies;
  }

  return movies.filter(
    ({ title, description }) =>
      title.toLowerCase().includes(formattedQuery) ||
      description.toLowerCase().includes(formattedQuery),
  );
};

export const App = () => {
  const [query, setQuery] = useState('');
  const filtredMovies = getMovieByQuery(moviesFromServer, query);

  const handleInputChange = event => {
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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filtredMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
