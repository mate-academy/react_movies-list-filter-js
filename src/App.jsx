import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(list, query) {
  if (query) {
    const readyQery = query.toLowerCase().trim();

    return list.filter(film => {
      const normalaizeTitle = (film.title || '').toLowerCase();
      const normalaizeDescr = (film.description || '').toLowerCase();

      return (
        normalaizeTitle.includes(readyQery) ||
        normalaizeDescr.includes(readyQery)
      );
    });
  }

  return list;
}

export const App = () => {
  const [query, setQery] = useState('');

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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={event => {
                  setQery(event.target.value);
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
