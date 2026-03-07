import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

function filterMovies(movies, query) {
  let visibleMovies = [...movies];
  const normalizedQuery = query.trim().toLowerCase();

  if (normalizedQuery) {
    return visibleMovies.filter(
      movie =>
        movie.title.trim().toLowerCase().includes(normalizedQuery) ||
        movie.description.trim().toLowerCase().includes(normalizedQuery),
    );
  }

  return visibleMovies;
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
                onChange={event => {
                  setQuery(event.target.value);
                }}
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
