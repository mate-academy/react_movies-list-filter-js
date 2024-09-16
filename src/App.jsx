import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(movies, query) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return movies;
  }

  return movies.filter(movie => {
    const normalizedTitle = movie.title.toLowerCase();
    const normalizedDescription = movie.description.toLowerCase();

    return (
      normalizedTitle.includes(normalizedQuery) ||
      normalizedDescription.includes(normalizedQuery)
    );
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const movies = filterMovies(moviesFromServer, query);

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
                onChange={({ target: { value } }) => setQuery(value)}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movies} query={query} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
