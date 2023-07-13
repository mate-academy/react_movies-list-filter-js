import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';

import moviesFromServer from './api/movies.json';

function getVisibleMovies(movies, query) {
  let visibleMovies = [...movies];

  if (query) {
    const preparedQuery = query.trim().toLowerCase();

    visibleMovies = visibleMovies.filter((movie) => {
      const { title, description } = movie;

      return title.toLowerCase().includes(preparedQuery)
        || description.toLowerCase().includes(preparedQuery);
    });
  }

  return visibleMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovie = getVisibleMovies(moviesFromServer, query);

  const handleChange = (event) => {
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
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovie} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
