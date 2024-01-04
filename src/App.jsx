import { useState } from 'react';
import './App.scss';

import { MoviesList } from './components/MoviesList';
import { SearchField } from './components/SearchField/SearchField';

import moviesFromServer from './api/movies.json';

function getPreperedMovies(movies, { query }) {
  let preperedMovies = [...movies];

  preperedMovies = preperedMovies.filter(
    movie => (
      movie.title.includes(query) || movie.description.includes(query)
    ),
  );

  return preperedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getPreperedMovies(
    moviesFromServer,
    { query },
  );

  return (
    <div className="page">
      <div className="page-content">
        <SearchField
          filterBy={(newQuery) => {
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
