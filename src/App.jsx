import { useState } from 'react';
import { MoviesList } from './components/MoviesList';

import moviesFromServer from './api/movies.json';

import './App.scss';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

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
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={moviesFromServer}
          searchQuery={searchQuery}
          onSearchQuery={setSearchQuery}
        />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
