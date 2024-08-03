import './App.scss';
import React, { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

// Function to filter movies based on the query
const getPreparedGoods = (movies, query) => {
  let preparedGoods = [...movies];

  if (query) {
    const preparedQuery = query.trim().toLowerCase();

    preparedGoods = preparedGoods.filter(
      movie =>
        movie.title.toLowerCase().includes(preparedQuery) ||
        movie.description.toLowerCase().includes(preparedQuery),
    );
  }

  return preparedGoods;
};

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleGoods = getPreparedGoods(moviesFromServer, query);

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
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleGoods} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
