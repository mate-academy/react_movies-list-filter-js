import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies, query) {
  let filteredMovies = [...movies];

  if (query) {
    filteredMovies = filteredMovies.filter(movie => {
      if (movie.description && movie.title) {
        const text = movie.title.toLowerCase();

        return text.includes(query.toLowerCase().trim());
      }

      return false;
    });
  }

  return filteredMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
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

        <MoviesList movies={visibleMovies} key={visibleMovies.imdbId} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
