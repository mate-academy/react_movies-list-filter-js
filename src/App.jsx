import './App.scss';
import React, { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [quary, setquary] = useState('');

  const normalizedquary = quary.trim().toLowerCase();

  const visibleMovies = moviesFromServer.filter(movie => {
    const title = (movie.title || '').toLowerCase();
    const description = (movie.description || '').toLowerCase();

    return (
      title.includes(normalizedquary) || description.includes(normalizedquary)
    );
  });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-quary" className="label">
              Search movie
            </label>
            <div className="control">
              <input
                type="text"
                id="search-quary"
                className="input"
                placeholder="Type search word"
                value={quary}
                onChange={event => {
                  setquary(event.target.value);
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
