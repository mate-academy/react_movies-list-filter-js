import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies, query) {
  let preparedMovies = [...movies];
  const normilizedQuery = query.trim().toLowerCase();

  preparedMovies = preparedMovies.filter(
    movie =>
      movie.title.toLowerCase().includes(normilizedQuery) ||
      movie.description.toLowerCase().includes(normilizedQuery),
  );

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visiableMovies = getPreparedMovies(moviesFromServer, query);

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
                onChange={e => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visiableMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
