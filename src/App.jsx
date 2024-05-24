import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  let visibleMovies = moviesFromServer;

  if (query) {
    visibleMovies = moviesFromServer.filter(movie => {
      return (
        movie.title
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase().trim()) ||
        movie.description
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase().trim())
      );
    });
  }

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
                value={query}
                onChange={e => {
                  setQuery(e.target.value);
                }}
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
