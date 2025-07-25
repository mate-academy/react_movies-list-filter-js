import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getMovies(movies, searchQuery) {
  if (searchQuery) {
    return movies.filter(movie => {
      return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }
  return movies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const shownMovies = getMovies(moviesFromServer, query);
  const filterBy = newQuery => {
    setQuery(newQuery);
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
                onChange={event => filterBy(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={shownMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
