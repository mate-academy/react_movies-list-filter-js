import { useState } from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { Header } from './components/Header';

function getFilterMovies(listMovies, query) {
  let filterMovies = [...listMovies];

  if (query) {
    filterMovies = filterMovies.filter(

      move => normalizeText(move.title).includes(normalizeText(query))
      || normalizeText(move.description).includes(normalizeText(query)),
    );
  }

  return filterMovies;
}

function normalizeText(text) {
  return text.toLowerCase().trim();
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getFilterMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">

        <Header
          query={query}
          filterBy={(newQuery) => {
            setQuery(newQuery);
          }}
        />
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
