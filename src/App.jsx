import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchField } from './components/SearchField/SearchField';

function filterMovies(movies, { query }) {
  const filteredMovies = [...movies];
  const request = query.trim().toLowerCase();

  if (query) {
    return filteredMovies.filter(
      movie =>
        movie.title.toLowerCase().includes(request) ||
        movie.description.toLowerCase().includes(request),
    );
  }

  return filteredMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterMovies(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <SearchField value={query} onChange={setQuery} />
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
