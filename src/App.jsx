/* eslint-disable max-len */
import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getVisibleMovies = (query) => {
  const newQuery = query.toLowerCase().trim();
  const isQueryIncludes = el => el.toLowerCase().includes(newQuery);

  if (!query) {
    return moviesFromServer;
  }

  return moviesFromServer.filter(({ title, description }) => isQueryIncludes(title) || isQueryIncludes(description));
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getVisibleMovies(query);

  const onInputChange = ({ target }) => {
    setQuery(target.value);
  };

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
                value={query}
                onChange={onInputChange}
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
