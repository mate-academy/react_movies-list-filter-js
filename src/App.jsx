import { useState } from 'react';
import { Field } from './components/Field';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovie(movies, { query }) {
  if (!movies || !query) {
    return movies;
  }

  const preparedQuery = query.trim().toLowerCase();

  return movies.filter(
    movie =>
      movie.title.toLowerCase().includes(preparedQuery) ||
      (movie.description || '').toLowerCase().includes(preparedQuery),
  );
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovie(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <Field query={query} setQuery={setQuery} />
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
