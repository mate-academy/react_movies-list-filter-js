import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

function solutionGoods(goods, query) {
  let newGoods = [...goods];
  const normalQuery = query.trim().toLowerCase();

  if (normalQuery) {
    newGoods = newGoods.filter(good => (
      good.title.toLowerCase().includes(normalQuery)
      || good.description.toLowerCase().includes(normalQuery)
    ));
  }

  return newGoods;
}

export const App = () => {
  const [query, setQuery] = useState('')
  const visibleGoods = solutionGoods(moviesFromServer, query);

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

      <MoviesList movies={visibleGoods} />
    </div>

    <div className="sidebar">Sidebar goes here</div>
  </div>
  );
};
