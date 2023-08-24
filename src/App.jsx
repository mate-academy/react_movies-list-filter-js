import './App.scss';
import { useMemo, useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const findLowQuery = (text, query) => (
  text.toLowerCase().includes(query.toLowerCase().trim())
);

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = useMemo(() => (
    moviesFromServer.filter(movie => (
      findLowQuery(movie.title, query)
      || findLowQuery(movie.description, query)
    ))), [query]);

  const onChange = event => setQuery(event.target.value);

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
                onChange={onChange}
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
