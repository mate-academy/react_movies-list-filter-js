import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Header } from './HEADER/header';

export const App = () => {
  const [query, setQuery] = useState('');

  let visibleMovies = moviesFromServer;
  const normalizeText = text => text.trim().toLowerCase();

  const updateQuery = normalizeText(query);

  if (updateQuery) {
    visibleMovies = moviesFromServer.filter(
      movie =>
        normalizeText(movie.title).includes(updateQuery) ||
        normalizeText(movie.description).includes(updateQuery),
    );
  }

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
