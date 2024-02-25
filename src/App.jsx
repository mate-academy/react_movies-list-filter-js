import './App.scss';
import { useState } from 'react';

import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

function getFilteredMovies(movies, { query }) {
  const filteredMovies = movies.filter(movie => {
    const modTitle = movie.title.toLowerCase();
    const modDescription = movie.description.toLowerCase();
    const modQuery = query.toLowerCase().trim();

    return modTitle.includes(modQuery) || modDescription.includes(modQuery);
  });

  return filteredMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getFilteredMovies(moviesFromServer, { query });

  const onInput = e => {
    setQuery(e.target.value);
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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={event => onInput(event)}
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
