import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

import './App.scss';

const filteredList = (moviesArr, query) => {
  return moviesArr.filter(
    item =>
      item.title.toLowerCase().includes(query.toLowerCase().trim()) ||
      item.description.toLowerCase().includes(query.toLowerCase().trim()),
  );
};

export const App = () => {
  const [query, setQuery] = useState('');

  const onChange = e => {
    setQuery(e.target.value);
  };

  const visibleMovies = filteredList([...moviesFromServer], query);

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
                onChange={e => onChange(e)}
                value={query}
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
