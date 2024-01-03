import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { FilterCase } from './components/FilterCase';

function getPreparedMovies(movies, { query }) {
  let preparedMovies = [...movies];

  if (query) {
    preparedMovies = preparedMovies.filter(
      movie => movie.title
        .toLowerCase()
        .includes(query.toLowerCase().trim())
      || movie.description
        .toLowerCase()
        .includes(query.toLowerCase().trim()),
    );
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visisibleMovies = getPreparedMovies(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="page-content">
        <FilterCase filterBy={(newQuery) => {
          setQuery(newQuery);
        }}
        />

        <MoviesList movies={visisibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
