import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  const handleInputChange = event => {
    const newQuery = event.target.value;

    setQuery(newQuery);

    const filteredMovies = moviesFromServer.filter(movie => {
      const normalizedQuery = newQuery.trim().toLowerCase();
      const titleMatches = movie.title.toLowerCase().includes(normalizedQuery);
      const descriptionMatches = movie.description
        .toLowerCase()
        .includes(normalizedQuery);

      return titleMatches || descriptionMatches;
    });

    setVisibleMovies(filteredMovies);
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

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
