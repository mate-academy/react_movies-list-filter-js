import './App.scss';
import { useState, useMemo } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function preparedMovies(movies, query) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return movies;
  }

  return movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(normalized) ||
      movie.description.toLowerCase().includes(normalized)
    );
  });
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = useMemo(() => {
    return preparedMovies(moviesFromServer, query);
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
                onChange={event => setQuery(event.target.value)}
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
