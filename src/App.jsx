import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';

import moviesFromServer from './api/movies.json';

function getPrepfredGoods(movies, query) {
  let preparedMovie = [...movies];

  if (query) {
    const preparedQuery = query.trim().toLowerCase();

    preparedMovie = preparedMovie.filter((movie) => {
      const movieInfo = {
        title: movie.title,
        description: movie.description,
      };

      return Object.values(movieInfo)
        .join(' ')
        .toLowerCase()
        .includes(preparedQuery);
    });
  }

  return preparedMovie;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visionMovie = getPrepfredGoods(moviesFromServer, query);

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
                onChange={e => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visionMovie} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
