import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(list, query) {
  let readyMovies = [...list];

  if (query) {
    const readyQery = query.toLowerCase().trim();

    readyMovies = readyMovies.filter(
      film =>
        film.title.toLowerCase().includes(readyQery) ||
        film.description.toLowerCase().includes(readyQery),
    );
  }

  return readyMovies;
}

export const App = () => {
  const [qery, setQery] = useState('');

  const visibleMovies = filterMovies(moviesFromServer, qery);

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
                value={qery}
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
