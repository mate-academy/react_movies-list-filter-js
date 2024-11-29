import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(moviess, query) {
  const movies = [...moviess];

  if (query) {
    const lowerCaseQuery = query.trim().toLowerCase();

    return movies.filter(
      movie =>
        movie.title.toLowerCase().includes(lowerCaseQuery) ||
        movie.description.toLowerCase().includes(lowerCaseQuery),
    );
  }

  return movies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleFilms = filterMovies(moviesFromServer, query);

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
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleFilms} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
