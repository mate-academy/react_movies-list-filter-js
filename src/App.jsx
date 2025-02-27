import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const filteredMovies = moviesFromServer.filter(movie => {
    return (
      movie.title.toLowerCase().trim().includes(query.toLowerCase().trim()) ||
      movie.description
        .toLowerCase()
        .trim()
        .includes(query.toLowerCase().trim())
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
                value={query}
                onChange={event => setQuery(event.target.value)}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        {/* Передаємо відфільтрований список у MoviesList */}
        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
