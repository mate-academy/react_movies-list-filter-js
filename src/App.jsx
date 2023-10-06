import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import { Field } from './components/Field';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies, { query }) {
  const correctMovies = movies.map((movie) => {
    if (movie.title.toLowerCase().includes(query.toLowerCase().trim())
      || movie.description.toLowerCase().includes(query.toLowerCase().trim())
    ) {
      return movie;
    }

    return false;
  });

  return correctMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(
    moviesFromServer,
    { query },
  );

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <Field
            filterBy={(newQuery) => {
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
