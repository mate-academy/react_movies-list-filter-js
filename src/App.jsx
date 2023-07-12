import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const setVisibleMovies = (movies, searchQuery) => {
    let resultMovies = movies;

    if (searchQuery) {
      resultMovies = movies.filter((movie) => {
        const title = movie.title.toLowerCase();
        const description = movie.description.toLowerCase();

        return title.includes(searchQuery) || description.includes(searchQuery);
      });
    }

    return resultMovies;
  };

  const visibleMovies = setVisibleMovies(moviesFromServer, query);

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
                onChange={(event) => {
                  const value = event.currentTarget.value.trim().toLowerCase();

                  setQuery(value);
                }}
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
