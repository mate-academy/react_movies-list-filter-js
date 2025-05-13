import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterQuery(field, filterValue) {
  return [...field].filter(movie => {
    const checkTitle = movie.title.toLowerCase().includes(filterValue);
    const checkDescription = movie.description
      .toLowerCase()
      .includes(filterValue);

    return checkTitle || checkDescription;
  });
}

export const App = () => {
  const [query, setQueary] = useState('');
  const visibleMovies = filterQuery(
    moviesFromServer,
    query.toLowerCase().trim(),
  );

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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={event => setQueary(event.target.value)}
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
