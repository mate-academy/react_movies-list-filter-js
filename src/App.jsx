import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterList(list, query) {
  const lowerQuery = query.trim().toLowerCase();

  return list.filter(item => {
    const title = item.title?.toLowerCase() || '';
    const description = item.description?.toLowerCase() || '';

    return title.includes(lowerQuery) || description.includes(lowerQuery);
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const filteredList = filterList(moviesFromServer, query);

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
                  setQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredList} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
