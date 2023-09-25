import { useState } from 'react';

import moviesFromServer from './api/movies.json';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar';

export const App = () => {
  const [query, setQuery] = useState('');

  const formattedQuery = query.toLowerCase()
    .trim();

  const visibleMovies = moviesFromServer.filter(movie => (
    movie.title.toLowerCase()
      .includes(formattedQuery)
    || movie.description.toLowerCase()
      .includes(formattedQuery)
  ));

  return (
    <div className="page">
      <div className="page-content">
        <SearchBar
          query={query}
          filterBy={(
            newQuery => setQuery(newQuery)
          )}
        />
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
