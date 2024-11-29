import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const prepareGoods = (goods, sortField) => {
  let preparedGoods = [...goods];
  const valueFilter = sortField.toLowerCase().trim();

  if (sortField) {
    preparedGoods = preparedGoods.filter(
      e =>
        e.title.toLowerCase().includes(valueFilter) ||
        e.description.toLowerCase().includes(valueFilter),
    );
  }

  return preparedGoods;
};

export const App = () => {
  const [sortField, setSortField] = useState('');

  const visibleMovies = prepareGoods(moviesFromServer, sortField);

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
                  setSortField(event.target.value);
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
