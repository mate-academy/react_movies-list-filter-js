import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function search(moviesList, query) {
  return moviesList.filter(
    movie =>
      movie.title.toLowerCase().trim().includes(query) ||
      movie.description.toLowerCase().trim().includes(query),
  );
}

export const App = () => {
  const [query, setQuery] = useState('');

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
                onChange={event =>
                  setQuery(event.target.value.trim().toLowerCase())
                }
              />
            </div>
          </div>
        </div>

        <MoviesList movies={search(moviesFromServer, query)} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
