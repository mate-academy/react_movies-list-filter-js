import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function preparedMovies(movies, query) {
  const normolizedQuery = query.trim().toLowerCase();

  return movies.filter(
    movie =>
      movie.title.toLowerCase().includes(normolizedQuery) ||
      movie.description.toLowerCase().includes(normolizedQuery),
  );
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = preparedMovies(moviesFromServer, query);

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
                onChange={event => {
                  setQuery(event.target.value);
                }}
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
