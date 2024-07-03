import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function moviesFilter(movies, { query }) {
  const normalizedQuery = query.toLowerCase().trim();

  const finalMovies = movies.filter(
    movie =>
      movie.title.toLowerCase().includes(normalizedQuery) ||
      movie.description.toLowerCase().includes(normalizedQuery),
  );

  return finalMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = moviesFilter([...moviesFromServer], { query });

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
                onChange={event => {
                  setQuery(event.currentTarget.value);
                }}
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
