import { useState, useMemo } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(movies, query) {
  return movies.filter(movie => (
    (movie.title.toLowerCase().includes(query.trim().toLowerCase()))
    || (movie.description.toLowerCase()
      .includes(query.trim().toLowerCase()))
  ));
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = useMemo(() => filterMovies(moviesFromServer, query),
    [moviesFromServer, query]);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={handleQueryChange}
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
