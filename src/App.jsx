import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  function query(movies, searchString) {
    return movies.filter(movie => {
      return (
        movie.title.toLowerCase().includes(searchString.trim().toLowerCase()) ||
        movie.description
          .toLowerCase()
          .includes(searchString.trim().toLowerCase())
      );
    });
  }

  const [searchString, setSearchString] = useState('');

  let visibleMovies = [...moviesFromServer];

  if (searchString !== '') {
    visibleMovies = query(visibleMovies, searchString);
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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={e => {
                  setSearchString(e.target.value);
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
