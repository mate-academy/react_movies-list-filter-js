import { useState } from 'react';
import './App.scss';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(list, query) {
  const preparedQuery = query.trim().toLowerCase();

  return list.filter(card => {
    return (
      card.title.toLowerCase().includes(preparedQuery) ||
      card.description.toLowerCase().includes(preparedQuery)
    );
  });
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = filterMovies(moviesFromServer, query);

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
                value={query}
                type="query"
                id="search-query"
                className="input"
                onChange={event => setQuery(event.target.value)}
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
