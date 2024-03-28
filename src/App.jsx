import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPrepareMovie(movie, { query }) {
  let prepareMovie = [...movie];

  function getFormatMovie(formatText) {
    return formatText.trim().toLowerCase();
  }

  if (query) {
    const formatQuery = getFormatMovie(query);

    prepareMovie = prepareMovie.filter(
      ({ title, description }) =>
        getFormatMovie(title).includes(formatQuery) ||
        getFormatMovie(description).includes(formatQuery),
    );
  }

  return prepareMovie;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovie = getPrepareMovie(moviesFromServer, { query });

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
                onChange={event => {
                  setQuery(event.currentTarget.value);
                }}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovie} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
