import { useState } from 'react';
import './App.scss';

import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { Field } from './components/Field/Field';

function getPreparedMovies(movies, { query }) {
  const preparedMovies = [...movies];

  if (query) {
    const part = query.trim().toLowerCase();

    return preparedMovies.filter((movie) => {
      const movieTitle = movie.title.toLowerCase();
      const movieDescription = movie.description.toLowerCase();

      return (movieTitle.includes(part) || movieDescription.includes(part));
    });
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <Field
            query={query}
            filterBy={(newQuery) => {
              setQuery(newQuery);
            }}
          />
        </div>

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
