import { useState } from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { Control } from './components/Control';

export const App = () => {
  const [query, setQuery] = useState('');
  const lowerQuery = query.toLowerCase().trim();

  const visibleMovies = moviesFromServer.filter(
    movie => (movie
      .title.toLowerCase().includes(lowerQuery))
      || movie.description.toLowerCase().includes(lowerQuery),
  );

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <Control
            query={query}
            onQueryChange={(newQuery) => {
              setQuery(newQuery);
            }}
          />
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
