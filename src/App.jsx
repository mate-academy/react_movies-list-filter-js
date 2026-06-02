import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

function prepareMovies(goods, query) {
  let sorted = [...goods];
  let newQuery = query.toLowerCase();

  sorted = sorted.filter(good => (
    good.title.toLowerCase().includes(newQuery))
    || (good.description.toLowerCase().includes(newQuery)));

  return sorted;
};

export const App = () => {
  const [sortField,setSortField] = useState('');
  const prepare = prepareMovies(moviesFromServer, sortField);

  return(
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
              value={sortField}
              onChange={(event) => (setSortField(event.target.value))}
            />
          </div>
        </div>
      </div>

      <MoviesList movies={prepare} />
    </div>

    <div className="sidebar">Sidebar goes here</div>
  </div>
);
}
