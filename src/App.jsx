import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const getVisibleMovies = () => {
    return moviesFromServer.filter(movie => {
      if (!query) return true;

      const lowerQuery = query.toLowerCase();

      return (
        movie.title.toLowerCase().includes(lowerQuery) ||
        movie.description.toLowerCase().includes(lowerQuery)
      );
    });
  };

  const visibleMovies = getVisibleMovies();

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
                onChange={e => setQuery(e.target.value.trim())}
              />
            </div>
          </div>
          <MoviesList movies={visibleMovies} />
        </div>
      </div>
    </div>
  );
};
