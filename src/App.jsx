/* eslint-disable max-len */
import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies, { query }) {
  const queryStr = query.trim().toLowerCase();
  let prepearedMovies = [...movies];

  if (query) {
    prepearedMovies = prepearedMovies.filter(
      movie => movie.title.toLowerCase().includes(queryStr)
        || movie.description.toLowerCase().includes(queryStr),
    );
  }

  return prepearedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, { query });

  return (
    <div className="page">
      <input
        type="text"
        id="search-query"
        className="search-field"
        placeholder="Type the word"
        onChange={event => setQuery(event.target.value)}
      />
      <br />
      <div className="page-content">
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar" data-cy="Sidebar">
        Sidebar will be here
      </div>
    </div>
  );
};
