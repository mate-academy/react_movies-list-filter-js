import './App.scss';
import { useState, useCallback } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const filterMovies = useCallback(() => {
    const fetchQuery = query.trim().toLowerCase();

    return moviesFromServer.filter(
      movie =>
        movie.title.toLowerCase().includes(fetchQuery) ||
        movie.description.toLowerCase().includes(fetchQuery),
    );
  }, [query]);

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
                onChange={e => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filterMovies()} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
