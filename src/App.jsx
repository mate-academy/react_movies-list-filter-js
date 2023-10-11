import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');
  const inputSymbols = query.trim().toLowerCase();

  const visibleMovies = moviesFromServer.filter((m) => {
    const chTitle = m.title.trim().toLowerCase().includes(inputSymbols);
    const chDesk = m.description.trim().toLowerCase().includes(inputSymbols);
    const result = chTitle || chDesk;

    return result;
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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
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
