import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  function getVisibleMovies(movies, query) {
    let filtredMovies = [...movies];
    const callbackForFilter = text => (
      text.toLowerCase().trim().includes(query.toLowerCase().trim())
    );

    if (query) {
      filtredMovies = filtredMovies
        .filter(movie => callbackForFilter(movie.title)
          || callbackForFilter(movie.description));
    }

    return filtredMovies;
  }

  const [query, setQuery] = useState('');
  const visibleMovies = getVisibleMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field box__field">
            <label htmlFor="search-query" className="label field__label">
              Search movie
            </label>

            <div className="control field__control">
              <input
                type="text"
                id="search-query"
                className="input control__input"
                placeholder="Type search word"
                onChange={(event) => {
                  setQuery(event.target.value);
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
