import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [visibleMovies, setVisibleMovies] = useState('');

  const normalizedRequest = visibleMovies.trim().toLowerCase();

  const filterMovies = () => {
    return moviesFromServer.filter(
      movie =>
        movie.title.toLowerCase().includes(normalizedRequest) ||
        movie.description.toLowerCase().includes(normalizedRequest),
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
                value={visibleMovies}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={ev => {
                  setVisibleMovies(ev.target.value);
                }}
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
