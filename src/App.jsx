import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedQuery(query) {
  return query.toLowerCase().trim();
}

function includeText(text, findText) {
  return text.toLowerCase().includes(findText);
}

function getPreparedMovies(movies, { query }) {
  let preparedMovies = [...movies];
  const newQuery = getPreparedQuery(query);

  if (query) {
    preparedMovies = preparedMovies
      .filter(movie => includeText(movie.title, newQuery)
      || includeText(movie.description, newQuery));
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getPreparedMovies(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                value={query}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={(event) => {
                  setQuery(event.currentTarget.value);
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
