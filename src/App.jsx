import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Box } from './components/box/box';

function getMovies(movies, { query }) {
  let prepareMovies = [...movies];

  if (query) {
    prepareMovies = prepareMovies.filter(movie => (movie
      .title.toLowerCase().includes(query.toLowerCase().trim()))
      || movie.description.toLowerCase().includes(query.toLowerCase().trim()));
  }

  return prepareMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getMovies(
    moviesFromServer,
    { query },
  );

  return (
    <div className="page">
      <div className="page-content">
        <Box
          query={query}
          filterBy={(newQuery) => {
            setQuery(newQuery);
          }}
        />

        <MoviesList
          movies={visibleMovies}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
