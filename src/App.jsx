import { useState } from 'react';

import './App.scss';

import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar/SearchBar';

import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const lowerQuery = query.trim().toLowerCase();

  const visibleMovies = moviesFromServer.filter(
    (movie) => {
      const inTitle = movie.title.toLowerCase().includes(lowerQuery);
      const inDesc = movie.description.toLowerCase().includes(lowerQuery);

      return inTitle || inDesc;
    },
  );

  return (
    <div className="page">
      <div className="page-content">
        <SearchBar
          query={query}
          searchBy={(currentSearch) => {
            setQuery(currentSearch);
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
