import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchBox } from './components/SearchBox/SearchBox';
import moviesFromServer from './api/movies.json';

function prepareMovies(movies, { query }) {
  let preparedMovies = movies;

  const normalizedQuery = query.trim().toLowerCase();

  if (normalizedQuery) {
    preparedMovies = preparedMovies.filter(
      movie =>
        movie.title.toLowerCase().includes(normalizedQuery) ||
        movie.description.toLowerCase().includes(normalizedQuery),
    );
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = prepareMovies(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="page-content">
        <SearchBox query={query} setQuery={setQuery} />
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
