import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');

  // Фільтруємо фільми
  const visibleMovies = moviesFromServer.filter((movie) => {
    const lowerQuery = query.trim().toLowerCase();
    return (
      movie.title.toLowerCase().includes(lowerQuery) ||
      movie.description.toLowerCase().includes(lowerQuery)
    );
  });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>
            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Передаємо visibleMovies, а не весь масив */}
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
