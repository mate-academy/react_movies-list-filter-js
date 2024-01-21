import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(movies, query) {
  const preparedMovies = [...movies];
  const lowerQuery = query.toLowerCase().trim();

  if (query && query !== ' ') {
    return preparedMovies.filter((movie) => {
      const titleInclude = movie.title.toLowerCase().includes(lowerQuery);
      const descriptionInclude = movie.description
        .toLowerCase().includes(lowerQuery);

      return titleInclude || descriptionInclude;
    });
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterMovies(moviesFromServer, query);

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
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
