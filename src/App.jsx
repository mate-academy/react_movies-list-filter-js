import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Control } from './components/Control/control';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = moviesFromServer.filter(
    movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    || movie.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <Control
              searchQuery={searchQuery}
              setSearchQuery={(newQuery) => {
                setSearchQuery(newQuery);
              }}
            />
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
