import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getMovies(movies, { query }) {
  let filterMovies = [...movies];

  if (query) {
    const trimQuary = query.trim().toLowerCase();

    filterMovies = filterMovies.filter(
      movie =>
        movie.title.toLowerCase().includes(trimQuary) ||
        movie.description.toLowerCase().includes(trimQuary),
    );
  }

  return filterMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getMovies(moviesFromServer, { query });

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
                onChange={event => {
                  setQuery(event.currentTarget.value);
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
