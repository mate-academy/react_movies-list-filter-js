import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const filterMovies = () => {
    const searchQuery = query.toLowerCase().trim();

    return moviesFromServer.filter((movie) => {
      const { title, description } = movie;

      return (title.toLowerCase().includes(searchQuery)
      || description.toLowerCase().includes(searchQuery));
    });
  };

  const inputChange = (event) => {
    setQuery(event.target.value);
    filterMovies();
  };

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
                onChange={inputChange}
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
