import './App.scss';

import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearhBar/SearchBar';

import moviesFromServer from './api/movies.json';

function getMoviesWithQuery(query) {
  let movies = [...moviesFromServer];

  if (query) {
    movies = movies.filter(({ title, description }) => {
      const queryRegExp = new RegExp(query, 'i');

      const isMatchInTitle = title.match(queryRegExp) !== null;
      const isMatchInDescription = description.match(queryRegExp) !== null;

      return isMatchInTitle || isMatchInDescription;
    });
  }

  return movies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getMoviesWithQuery(query);

  return (
    <div className="page">
      <div className="page-content">
        <SearchBar onQueryChange={newQuery => setQuery(newQuery)} />

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
