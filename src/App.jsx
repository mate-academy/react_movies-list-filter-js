import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const queryTrim = query.trim().toLowerCase();

  const visibleMovies = () =>
    moviesFromServer.filter(targetMovie => {
      const normalizedTarget = targetMovie.title.toLowerCase();
      const normalizedDescription = (
        targetMovie.description || ''
      ).toLowerCase();

      return (
        normalizedTarget.includes(queryTrim) ||
        normalizedDescription.includes(queryTrim)
      );
    });

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
                value={query}
                placeholder="Type search word"
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies()} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
