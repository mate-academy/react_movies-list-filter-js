import './App.scss';
import { useState } from 'react';

import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar/SearchBar';
import { getPreparedMovies } from './utils/movieUtils';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, searchQuery);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
