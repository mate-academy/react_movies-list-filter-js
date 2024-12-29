import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilteredMovies(movies, query) {
  const sortedMovies = [...movies];
  const newQuery = query.trim().toLowerCase();

  return sortedMovies.filter(movie => {
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();

    return title.includes(newQuery) || description.includes(newQuery);
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getFilteredMovies(moviesFromServer, query);

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
                onChange={event => {
                  setQuery(event.currentTarget.value);
                }}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
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
