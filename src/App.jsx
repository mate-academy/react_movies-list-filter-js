import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  function prepareMovies(movies) {
    let preparedMovies = movies;
    const normalizedQuery = query.trim().toLowerCase();

    if (normalizedQuery) {
      preparedMovies = preparedMovies.filter(movie => {
        return movie.title.toLowerCase().includes(normalizedQuery);
      });
    }

    return preparedMovies;
  }

  const visibleMovies = prepareMovies(moviesFromServer);

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
                onChange={event => {
                  setQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <aside className="sidebar">Sidebar goes here</aside>
    </div>
  );
};
