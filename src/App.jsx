import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getPrepearedMovies = (movies, { filter }) => {
  if (!filter) return movies;
  const normalizedFilter = filter.toLowerCase().trim();

  return movies.filter(({ title, description }) => {
    return [title, description].some(text => {
      return text.toLowerCase().includes(normalizedFilter);
    });
  });
};

export const App = () => {
  const [filter, setFilter] = useState('');
  const visibleMovies = getPrepearedMovies(moviesFromServer, { filter });

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
                value={filter}
                onChange={event => setFilter(event.target.value)}
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
