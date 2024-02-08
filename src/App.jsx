import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const filterMovies = () => {
    if (!query) {
      return moviesFromServer;
    }

    return moviesFromServer.filter((movie) => {
      const title = movie.title.toLowerCase();
      const description = movie.description.toLowerCase();

      return title.includes(query) || description.includes(query);
    });
  };

  const handleSearchInputChange = (e) => {
    const value = e.target.value.toLowerCase().trim();

    setQuery(value);
  };

  const visibleMovies = filterMovies();

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
                onChange={handleSearchInputChange}
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
