import { useState } from 'react';

import { MovieSearch } from './components/MoviesSearch/MoviesSearch';
import { MoviesList } from './components/MoviesList';

import moviesFromServer from './api/movies.json';

import './App.scss';

const isContainsSubstring = (string, subString) => (
  string.toLowerCase()
    .includes(
      subString.trim().toLowerCase(),
    )
);

const getPreperedGoods = (goods, query) => {
  let preperedGoods = [...goods];

  if (query) {
    preperedGoods = preperedGoods.filter(({ title, description }) => (
      isContainsSubstring(title, query)
      || isContainsSubstring(description, query)
    ));
  }

  return preperedGoods;
};

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getPreperedGoods(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <MovieSearch
          query={query}
          search={newQuery => setQuery(newQuery)}
        />
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
