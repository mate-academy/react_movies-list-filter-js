import { useState } from 'react';

import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import './App.scss';

function getPreparedMovies(movies, { query }) {
  let preparedMovies = [...movies];

  preparedMovies = preparedMovies.filter((movie) => {
    const { title, description } = movie;
    const queryIgnored = query.trim().toLowerCase();

    const titleQuery = title.toLowerCase().includes(queryIgnored);
    const descriptionQuery
      = description.toLowerCase().includes(queryIgnored);

    return titleQuery || descriptionQuery;
  });

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(
    moviesFromServer, { query },
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
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
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
