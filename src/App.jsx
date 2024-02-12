import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  function cleanString(str) {
    return str.toLowerCase().replace(/\s/g, '');
  }

  const filteredMovies = moviesFromServer.filter((movie) => {
    const cleanTitle = cleanString(movie.title);
    const cleanDescription = cleanString(movie.description);
    const cleanQuery = cleanString(query);

    return cleanTitle.includes(cleanQuery)
    || cleanDescription.includes(cleanQuery);
  });

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
                onChange={handleInput}
                id="search-query"
                className="input"
                placeholder="Type search word"
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
