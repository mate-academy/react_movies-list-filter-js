import './App.scss';

import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const searchMovies = query => {
  let result = [...moviesFromServer];

  if (query) {
    result = result.filter(
      movie =>
        movie.title.toLowerCase().includes(query) ||
        movie.description.toLowerCase().includes(query),
    );
  }

  return result;
};

export const App = () => {
  const [query, setQuery] = useState('');

  const mormalizeQuery = query.trim().toLowerCase();
  const visibleMovies = searchMovies(mormalizeQuery);

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
                onChange={e => setQuery(e.target.value)}
                value={query}
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
