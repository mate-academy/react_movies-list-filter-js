import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const normalize = (text = '') => text.toLowerCase().trim();

export const App = () => {
  const [query, setQuery] = useState('');

  const normalizedQuery = normalize(query);
  const visibleMovies = moviesFromServer.filter(movie => {
    const description = normalize(movie.description);
    const title = normalize(movie.title);

    return title.includes(normalizedQuery) ||
      description.includes(normalizedQuery);

  });

  const handleFilter = event => {
    setQuery(event.target.value);
  };

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
                onChange={handleFilter}
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
