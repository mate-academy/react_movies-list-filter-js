import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getPrepareMovies(moviesFromServer, query);

  function getPrepareMovies(movies, query) {
    let visibleMovies = [...movies];
    if (query) {
      query = (query.trim()).toLowerCase();
      visibleMovies = visibleMovies.filter(
        good => good.title.toLowerCase().includes(query) || good.description.toLowerCase().includes(query),
      );
    }
    return visibleMovies;
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
                value={query}
                onChange={event => {
                  setQuery(event.target.value);
                }}
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
