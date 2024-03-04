import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import './App.scss';

export const App = () => {
  const [query, setQuery] = useState('');

  function filterMovies(movies) {
    const queryText = query.toLowerCase().trim();

    return movies.filter(({ title, description }) => {
      if (queryText) {
        return (
          title.toLowerCase().includes(queryText) ||
          description.toLowerCase().includes(queryText)
        );
      }

      return true;
    });
  }

  const filteredMovies = filterMovies(moviesFromServer);

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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
