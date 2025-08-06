import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const movies = [...moviesFromServer];

  const filterMovies = function () {
    if (!query) {
      return moviesFromServer;
    }

    const searchTerm = query.toLowerCase().trim();

    return movies.filter(
      movie =>
        movie.title.toLowerCase().trim().includes(searchTerm) ||
        movie.description.toLowerCase().trim().includes(searchTerm),
    );
  };

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
                onChange={e => {
                  setQuery(e.target.value);
                }}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filterMovies()} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
