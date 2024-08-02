import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getPrepareGoods = (movies, query) => {
  let prepareGoods = [...movies];

  if (query) {
    const prepareQuery = query.trim().toLowerCase();

    prepareGoods = prepareGoods.filter(
      movie =>
        movie.title.toLowerCase().includes(prepareQuery) ||
        movie.description.toLowerCase().includes(prepareQuery),
    );
  }

  return prepareGoods;
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleGoods = getPrepareGoods(moviesFromServer, query);

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
                  setQuery(event.currentTarget.value);
                }}
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
