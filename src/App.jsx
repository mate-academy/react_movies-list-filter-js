import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

/* eslint-disable-next-line jsx-a11y/label-has-associated-control */

function filterByQuery(query) {
  const preparedQuery = query.toLowerCase().trim();

  return moviesFromServer.filter(item => {
    const titleInclude = item.title.toLowerCase().includes(preparedQuery.toLowerCase());
    const descInclude = item.description.toLowerCase().includes(preparedQuery.toLowerCase());

    return titleInclude || descInclude;
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleItems = filterByQuery(query);

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
              type="text"
              id="search-query"
              className="input"
              placeholder="Type search word"
              onChange={(event) => {
                setQuery(event.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <MoviesList movies={visibleItems} />
    </div>

    <div className="sidebar">Sidebar goes here</div>
  </div>
)};
