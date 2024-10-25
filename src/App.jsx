import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function preparedGoods(goods, query) {
  if (query.length === 0) {
    return goods;
  }

  // eslint-disable-next-line max-len
  const filterGoods = goods.filter(good => {
    return (
      good.title.toLowerCase().includes(query.toLowerCase().trim()) ||
      good.description.toLowerCase().includes(query.toLowerCase().trim())
    );
  });

  return filterGoods;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = preparedGoods(moviesFromServer, query);

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
                onChange={e => {
                  setQuery(e.target.value);
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
