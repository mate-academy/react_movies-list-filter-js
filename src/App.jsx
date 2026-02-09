import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  function prepareMovies(movies, { query: searchQuery }) {
    let preparedMovies = movies;
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (normalizedQuery) {
      preparedMovies = movies.filter(
        movie =>
          (movie.title + movie.description || '')
            .toLowerCase()
            .includes(normalizedQuery),
        // eslint-disable-next-line function-paren-newline
      );
    }

    return preparedMovies;
  }

  const visibleMovies = prepareMovies(moviesFromServer, { query });

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
                onChange={event => {
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
