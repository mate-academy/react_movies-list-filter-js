import './App.scss';

import { useState } from 'react';
import { MoviesList } from './components/MoviesList';

import moviesFromServer from './api/movies.json';
import { SearhField } from './components/SearchField';
import { filterMovies } from './utils';

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <SearhField
            filterBy={newQuery => {
              setQuery(newQuery);
            }}
          />
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
