import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import './App.scss';

export const App = () => {
  const [query, setQuery] = useState('');

  const handleChange = event => setQuery(event.target.value);
  const filterMovies = () => (
    moviesFromServer.filter((movie) => {
      const { title, description } = movie;
      const movieTitle = title.toUpperCase();
      const movieDescription = description.toUpperCase();
      const movieQuery = query.trim().toUpperCase();

      return movieTitle.includes(movieQuery)
      || movieDescription.includes(movieQuery);
    })
  );

  const filteredMovies = filterMovies();

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
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
