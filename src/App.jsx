import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(movies, query) {
  let filteredMovies = movies;

  if (query) {
    const normalizedQuery = query.trim().toLowerCase();

    filteredMovies = filteredMovies.filter(
      ({ title, description }) =>
        // eslint-disable-next-line operator-linebreak
        title.toLowerCase().includes(normalizedQuery) ||
        description.toLowerCase().includes(normalizedQuery),
    );
  }

  return filteredMovies;
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
                onChange={e => setQuery(e.target.value)}
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
