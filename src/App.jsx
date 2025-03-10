import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');

  const findMovies = () => {
    let foundMovies = [...moviesFromServer];
    const goodQuery = query.trim().toLowerCase();
    if (query) {
      foundMovies = foundMovies.filter(
        movie =>
          movie.title.toLowerCase().includes(goodQuery) ||
          movie.description.toLowerCase().includes(goodQuery),
      );
    }

    return foundMovies;
  };

  const visibleMovies = findMovies();

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
                onChange={event => setQuery(event.target.value)}
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
