import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function prepareGoods(goods, { query }) {
  const normalizedQuery = query.trim().toLowerCase();
  let preparedGoods = [...goods];

  if (normalizedQuery) {
    preparedGoods = preparedGoods.filter(
      good =>
        good.title.toLowerCase().includes(normalizedQuery) ||
        good.description.toLowerCase().includes(normalizedQuery),
    );
  }

  return preparedGoods;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleGoods = prepareGoods(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                value={query}
                onChange={event => setQuery(event.target.value)}
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
