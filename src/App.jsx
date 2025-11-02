import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedGoods(goods, { query }) {
  let preparedGoods = goods;
  const normalizedQuery = query.trim().toLowerCase();

  if (normalizedQuery) {
    preparedGoods = preparedGoods.filter(good => {
      const normalizedTitle = good.title.trim().toLowerCase();
      const normalizedDescription = good.description.trim().toLowerCase();

      return (
        normalizedTitle.includes(normalizedQuery) ||
        normalizedDescription.includes(normalizedQuery)
      );
    });
  }

  return preparedGoods;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getPreparedGoods(moviesFromServer, { query });

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
                onChange={event => {
                  setQuery(event.currentTarget.value);
                }}
                id="search-query"
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
