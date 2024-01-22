import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function seachQueryInField(list, { toLowerQuery }) {
  let copyList = [...list];

  if (toLowerQuery) {
    copyList = copyList.filter(eachList => eachList.title.toLowerCase()
      .includes(toLowerQuery.trim())
      || eachList.description.toLowerCase().includes(toLowerQuery.trim()));
  }

  return copyList;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const toLowerQuery = query.toLowerCase();

  const visibleMovies = seachQueryInField(moviesFromServer, { toLowerQuery });

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

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
