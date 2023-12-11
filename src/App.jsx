import { useMemo, useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilterMovie(movies, query) {
  const formatQuery = query.toLowerCase().trim();

  if (query) {
    return movies.filter(
      movie => movie.title.toLowerCase().includes(formatQuery)
      || movie.description.toLowerCase().includes(formatQuery),
    );
  }

  return movies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies
  = useMemo(() => getFilterMovie(moviesFromServer, query), [query]);

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
                onChange={(event) => {
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
