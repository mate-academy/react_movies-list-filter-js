import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterList(arr, query) {
  if (!query || !arr) return arr;

  const queryLowerCase = query.toLowerCase().trim();

  return arr.filter(
    item =>
      item.title.toLowerCase().includes(queryLowerCase) ||
      item.description.toLowerCase().includes(queryLowerCase),
  );
}

export const App = () => {
  const [query, setQuery] = useState('');
  const movies = filterList(moviesFromServer, query);

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
                onChange={event => setQuery(event.target.value)}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
