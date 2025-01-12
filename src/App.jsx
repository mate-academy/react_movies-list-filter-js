import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilterMovies(movies, query) {
  const moviesFilter = [...movies];

  if (query !== '') {
    const filter = query.trim().toLowerCase();

    return moviesFilter.filter(
      movie =>
        movie.title.toLowerCase().includes(filter) ||
        movie.description.toLowerCase().includes(filter),
    );
  }

  return moviesFilter;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const movies = getFilterMovies(moviesFromServer, query);

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
                placeholder="Type search word"
                onChange={event => {
                  setQuery(event.currentTarget.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
