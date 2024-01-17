import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getVisibleMovies(movies, { query }) {
  const prepareMovies = [...movies];

  if (query) {
    return prepareMovies.filter(
      movie => movie.title.toLowerCase().includes(query.trim().toLowerCase())
        || movie.description.toLowerCase().includes(query.trim().toLowerCase()),
    );
  }

  return prepareMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getVisibleMovies(moviesFromServer, { query });

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
                value={query}
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={e => setQuery(e.currentTarget.value)}
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
