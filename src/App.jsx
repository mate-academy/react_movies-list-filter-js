import './App.scss';
import { useState } from 'react';
import moviesFromServer from './api/movies.json';

import { MoviesList } from './components/MoviesList';

function getPreparedMovies(movies, { query }) {
  let preparedMovies = [...movies];

  const lowerCaseQuery = query.trim().toLowerCase();

  preparedMovies = preparedMovies.filter(move => {
    const titleMatches = move.title.toLowerCase().includes(lowerCaseQuery);
    const descriptionMatches = move.description
      .toLowerCase()
      .includes(lowerCaseQuery);

    return titleMatches || descriptionMatches;
  });

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, { query });

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
                onChange={event => {
                  setQuery(event.target.value);
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
