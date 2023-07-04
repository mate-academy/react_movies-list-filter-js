import { useState } from 'react';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import './App.scss';

function getFilteredMovies(movies, query) {
  let filteredMovies = [...movies];

  if (query) {
    const queryForFilter = query.trim().toLowerCase();

    filteredMovies = filteredMovies.filter((movie) => {
      const normalizedTitle = movie.title.toLowerCase();
      const normalizedDescription = movie.description.toLowerCase();

      return normalizedTitle.includes(queryForFilter)
      || normalizedDescription.includes(queryForFilter);
    });
  }

  return filteredMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getFilteredMovies(moviesFromServer, query);

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
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
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
