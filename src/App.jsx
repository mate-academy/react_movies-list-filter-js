import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  function filterItems(items, search) {
    const preparedSearch = search.trim().toLowerCase();

    function find(data) {
      return data.toLowerCase().includes(preparedSearch);
    }

    if (search) {
      return items.filter(item => find(item.title) || find(item.description));
    }

    return items;
  }

  function handleChange(e) {
    setQuery(e.target.value);
  }

  const visibleMovies = filterItems(moviesFromServer, query);

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
                onChange={handleChange}
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
