import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Field } from './components/Field/Field';

function getPreparedFilm(movies, { query }) {
  let preparedMovies = [...movies];
  const newQuery = query.toLowerCase().trim();

  if (newQuery) {
    preparedMovies = preparedMovies
      .filter(
        movie => movie.description
          .toLowerCase().includes(newQuery)
        || movie.title.toLowerCase().includes(newQuery),
      );
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getPreparedFilm(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <Field
            query={query}
            filterBy={newQuery => setQuery(newQuery)}
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
