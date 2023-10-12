import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies = [], query = '') {
  const preparedQuery = query.trim().toLowerCase();
  const preparedMovies = [...movies];

  return preparedMovies.filter(movie => (
    movie.title.toLowerCase().includes(preparedQuery)
    || movie.description.toLowerCase().includes(preparedQuery)
  ));
}

export const App = () => {
  const [query, setQuery] = useState('');
  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  const visibleMovies = getPreparedMovies(moviesFromServer, query);

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
                onChange={handleQuery}
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
