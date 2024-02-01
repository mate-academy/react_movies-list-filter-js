import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPrepairedMovies(movies, { query }) {
  let prepairedMovies = [...movies];

  if (query) {
    prepairedMovies = prepairedMovies.filter((movie) => {
      const targetQuery = query.trim().toLowerCase();
      const lowTitle = movie.title.toLowerCase();
      const lowDescription = movie.description.toLowerCase();

      return (
        lowTitle.includes(targetQuery) || lowDescription.includes(targetQuery)
      );
    });
  }

  return prepairedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPrepairedMovies(moviesFromServer, { query });

  function handleInput(event) {
    setQuery(event.target.value);
  }

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
                onChange={handleInput}
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

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
