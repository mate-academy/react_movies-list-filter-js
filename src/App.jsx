import { useState } from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

const getFilteredMovies = (movies, { query }) => {
  if (!query) {
    return movies;
  }

  const queryEdited = query.trim().toLowerCase();

  return movies.filter(
    movie => movie.title.toLowerCase().includes(queryEdited)
    || movie.description.toLowerCase().includes(queryEdited),
  );
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getFilteredMovies(moviesFromServer, { query });

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
                onChange={event => setQuery(event.target.value)}
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
