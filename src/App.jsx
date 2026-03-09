import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Header } from './components/Header';

export const App = () => {
  const [query, setQuery] = useState('');
  let visibleMovie = moviesFromServer;
  const normalizeText = text => text.toLowerCase().trim();

  const updateQuery = normalizeText(query);

  if (updateQuery) {
    visibleMovie = moviesFromServer.filter(
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
        <MoviesList movies={visibleMovie} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
