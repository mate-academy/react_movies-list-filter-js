import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPrepered(movies, { query }) {
  let preperedMovies = [...movies];
  const cleanQuery = query.toLowerCase().trim();

  if (query) {
    preperedMovies = preperedMovies.filter(
      movie =>
        movie.title.toLowerCase().includes(cleanQuery) ||
        movie.description.toLowerCase().includes(cleanQuery),
    );
  }

  return preperedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPrepered(moviesFromServer, { query });

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
                onChange={event => {
                  setQuery(event.currentTarget.value);
                }}
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
