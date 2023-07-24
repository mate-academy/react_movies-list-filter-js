import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [condition, setCondition] = useState('');
  const visibleMovies = getvisibleMovies(moviesFromServer, condition);

  const handleChangeQuery = event => setCondition(event.target.value);

  function getvisibleMovies(movies, query) {
    if (query) {
      return movies.filter(movie => movie.title
        .toLowerCase().includes(query.toLowerCase().trim()) || movie.description
        .toLowerCase().includes(query.toLowerCase().trim()));
    }

    return movies;
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
                onChange={handleChangeQuery}
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
