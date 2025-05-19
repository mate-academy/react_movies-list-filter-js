import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function preperedVisibleMovies(movies, query) {
  const normalizedQuery = query.trim().toLowerCase();
  const visibleMovies = [...movies];

  if (query) {
    return visibleMovies.filter(
      movie =>
        movie.title.toLowerCase().includes(normalizedQuery) ||
        movie.description.toLowerCase().includes(normalizedQuery),
    );
  }

  return visibleMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = preperedVisibleMovies(moviesFromServer, query);

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
                onChange={event => {
                  setQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList visibleMovies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
