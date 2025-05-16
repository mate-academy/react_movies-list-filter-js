import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function movieFilter(movies, { query }) {
  const newItem = [...movies];
  const newQuery = query.trim().toLowerCase();

  if (!newQuery) {
    return movies;
  }

  return newItem.filter(
    movie =>
      movie.title.toLowerCase().includes(newQuery) ||
      movie.description.toLowerCase().includes(newQuery),
  );
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = movieFilter(moviesFromServer, { query });

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
                onChange={event => setQuery(event.target.value)}
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
