import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Header } from './components/Header/Header';

function filterMoviesByQuery(movies, query) {
  const queryToLowerCase = query.toLowerCase();

  return movies.filter(
    ({ title = '', description = '' }) =>
      title.toLowerCase().includes(queryToLowerCase) ||
      description.toLowerCase().includes(queryToLowerCase),
  );
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterMoviesByQuery(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <Header
          filterBy={newQuery => {
            setQuery(newQuery);
          }}
        />

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
