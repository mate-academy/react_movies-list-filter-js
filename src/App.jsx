import { useState, useMemo } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const normalizedQuery = query.trim().toLowerCase();

  // ✨ Безпечне нормалізоване порівняння
  const normalize = (text) => (text || '').toLowerCase();

  const visibleMovies = useMemo(() => {
    return moviesFromServer.filter(movie => {
      const title = normalize(movie.title);
      const description = normalize(movie.description);

      return (
        title.includes(normalizedQuery)
        || description.includes(normalizedQuery)
      );
    });
  }, [normalizedQuery]);

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
                onChange={handleQueryChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
