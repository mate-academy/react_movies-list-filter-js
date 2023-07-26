import { useState } from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

function filterMovies(movies, { query }) {
  let preperedMovies = [...movies];
  const processedQuery = query.trim().toLowerCase();

  if (query) {
    preperedMovies = preperedMovies.filter(movie => (
      movie.title.toLowerCase().includes(processedQuery)
      || movie.description.toLowerCase().includes(processedQuery)
    ));
  }

  return preperedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterMovies(moviesFromServer, { query });

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

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
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <MoviesList movies={visibleMovies} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
