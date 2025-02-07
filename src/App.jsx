import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies, { query }) {
  let initialMovies = [...movies];

  if (query.trim()) {
    const lowerQuery = query.toLowerCase().trim();

    initialMovies = movies.filter(
      movie =>
        movie.title.toLowerCase().includes(lowerQuery) ||
        movie.description.toLowerCase().includes(lowerQuery),
    );
  }

  return initialMovies;
}

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
