import { useState } from 'react';

import './App.scss';

import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

const getVisibleMovies = (movies, query) => {
  const processedQuery = query.trim().toLowerCase();

  return movies.filter(({ title, description }) => {
    return (
      title.toLowerCase().includes(processedQuery) ||
      description.toLowerCase().includes(processedQuery)
    );
  });
};

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getVisibleMovies(moviesFromServer, query);

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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={event => setQuery(event.target.value)}
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
