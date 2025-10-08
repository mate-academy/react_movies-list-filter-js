import { useState } from 'react';

import moviesFromServer from './api/movies.json';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Box } from './components/Box/Box';

export const App = () => {
  const [query, setQuery] = useState('');

  function getPrepearedMovies(moviesToChange, newQuery) {
    let prepearedMovies = moviesToChange;
    const normalizeQuery = newQuery.toLowerCase().trim();

    if (newQuery) {
      prepearedMovies = prepearedMovies.filter(
        movie =>
          movie.title.toLowerCase().includes(normalizeQuery) ||
          movie.description.toLowerCase().includes(normalizeQuery),
      );
    }

    return prepearedMovies;
  }

  // function filterBy() {

  // }
  const visibleMovies = getPrepearedMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <Box query={query} onQuery={setQuery} />

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
