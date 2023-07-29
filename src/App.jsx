import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { isValueSuitable } from './helpers/isValueSuitable';

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = moviesFromServer.filter(({ title, description }) => {
    const titleFits = isValueSuitable(query, title);
    const descriptionFits = isValueSuitable(query, description);

    return titleFits || descriptionFits;
  });

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

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
