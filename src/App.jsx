import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getVisibleMovies = (movies, { query }) => {
  let preparedMovies = [...movies];

  if (query !== '') {
    preparedMovies = preparedMovies.filter(movie => {
      const lowerQuery = query.toLowerCase().trim();

      return (
        movie.title.toLowerCase().includes(lowerQuery) ||
        movie.description.toLowerCase().includes(lowerQuery)
      );
    });
  }

  return preparedMovies;
};

export const App = () => {
  const [filterQuery, setFilterQuery] = useState('');
  const visibleMovies = getVisibleMovies(moviesFromServer, {
    query: filterQuery,
  });

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
                value={filterQuery}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={event => setFilterQuery(event.target.value)}
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
