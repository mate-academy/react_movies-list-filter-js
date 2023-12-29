import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { FilterBox } from './components/FilterBox/FilterBox';

function getPreparedMovies(movies, { query }) {
  let preparedMovies = [...movies];

  if (query) {
    preparedMovies
      = preparedMovies.filter(
        movie => movie.title
          .toLowerCase()
          .includes(query.trim().toLowerCase())
          || movie.description
            .toLowerCase()
            .includes(query.trim().toLowerCase()),
      );
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="page-content">
        <FilterBox filterBy={(newQuery) => {
          setQuery(newQuery);
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
