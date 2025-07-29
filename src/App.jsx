import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import './App.scss';

const getPreparedMovies = (movies, { query }) => {
  let copyMovies = [...movies];
  const preparedQuery = query.toLowerCase().trim();

  const hasQuery = searchedQuery =>
    searchedQuery.toLowerCase().includes(preparedQuery);

  if (query) {
    copyMovies = copyMovies.filter(
      movie => hasQuery(movie.title) || hasQuery(movie.description),
    );
  }

  return copyMovies;
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, { query });

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
                onChange={e => setQuery(e.target.value)}
                value={query}
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
