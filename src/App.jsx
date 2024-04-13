import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filterBy = (movies, query) => {
  let moviesCopy = movies.slice();
  const currentQuery = query.trim().toLowerCase();

  if (currentQuery) {
    moviesCopy = moviesCopy.filter(movie => {
      const isIncludesTitle = movie.title.toLowerCase().includes(currentQuery);
      const isIncludesDescription = movie.description
        .toLowerCase()
        .includes(currentQuery);

      if (isIncludesDescription || isIncludesTitle) {
        return true;
      }

      return false;
    });
  }

  return moviesCopy;
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterBy(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={evt => {
                  setQuery(evt.target.value);
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
