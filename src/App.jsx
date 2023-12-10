import { useState } from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { Field } from './components/Field';

const getPreperedMovies = (query) => {
  let preperedMovies = [...moviesFromServer];
  const preperedQuery = query.toLowerCase().trim();

  if (query) {
    preperedMovies = preperedMovies.filter((movie) => {
      if (
        movie.title.toLowerCase().includes(preperedQuery)
        || movie.description.toLowerCase().includes(preperedQuery)
      ) {
        return true;
      }

      return false;
    });
  }

  return preperedMovies;
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreperedMovies(query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <Field
            query={query}
            filterBy={formQuery => setQuery(formQuery)}
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
