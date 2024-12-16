import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilterBy(movies, query) {
  const searchQuery = query.toLowerCase().trim();

  return movies.filter(
    movie =>
      movie.title.toLowerCase().includes(searchQuery) ||
      movie.description.toLowerCase().includes(searchQuery),
  );
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getFilterBy(moviesFromServer, query);

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
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={visibleMovies}
          filterBy={newQuery => {
            setQuery(newQuery);
          }}
        />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
