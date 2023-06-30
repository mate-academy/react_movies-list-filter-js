import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function sortMovie(query) {
  if (query) {
    const moviesFromServerCopy
    = [...moviesFromServer].filter(
      movie => movie.title.toLocaleLowerCase().includes(query.trim())
      || movie.description.toLocaleLowerCase().includes(query.trim()),
    );

    return moviesFromServerCopy;
  }

  return moviesFromServer;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = sortMovie(query);

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
                // value={query}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={(event) => {
                  setQuery(event.target.value.toLocaleLowerCase());
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
