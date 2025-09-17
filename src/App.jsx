import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const matchesQuery = (movie, normalizedQuery) => {
  const title = movie.title?.toLowerCase() ?? '';
  const description = movie.description?.toLowerCase() ?? '';

  return (
    title.includes(normalizedQuery) || description.includes(normalizedQuery)
  );
};

export const App = () => {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.toLowerCase().trim();

  const visibleMovies = moviesFromServer.filter(
    movie => matchesQuery(movie, normalizedQuery),
    // eslint-disable-next-line function-paren-newline
  );

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

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
