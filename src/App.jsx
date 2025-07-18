import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterBy(movies, { query }) {
  let filterMovies = movies;

  if (query) {
    filterMovies = filterMovies.filter(movie => {
      return (
        movie.title.trim().toLowerCase().includes(query.trim().toLowerCase()) ||
        movie.description
          .trim()
          .toLowerCase()
          .includes(query.trim().toLowerCase())
      );
    });
  }

  return filterMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterBy(moviesFromServer, { query });

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
