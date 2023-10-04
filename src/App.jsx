import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);
  const [query, setQuery] = useState('');

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
              onChange={(event) => {
                const newValue = event.target.value;

                setQuery(newValue);
                setVisibleMovies(
                  moviesFromServer.filter(({ title, description }) => title
                    .toLowerCase().includes(newValue.trim().toLowerCase())
                  || description
                    .toLowerCase().includes(newValue.trim().toLowerCase())),
                );
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

    <div className="sidebar">
      Sidebar goes here
    </div>
  </div>
  );
};
