import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

const getFilteredMovies = (movies, filters) => {
  let filteredMovies = [...movies];

  if (filters.query !== '') {
    const normalizedQuery = filters.query.trim().toLowerCase();

    filteredMovies = filteredMovies.filter(
      movie =>
        movie.title.toLowerCase().includes(normalizedQuery) ||
        movie.description.toLowerCase().includes(normalizedQuery),
    );
  }

  return filteredMovies;
};

export const App = () => {
  const [query, setQuery] = useState('');

  const filteredMovies = getFilteredMovies(moviesFromServer, { query });

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

        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
