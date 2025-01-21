import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilteringMovies(moviesJson, { query }) {
  let preparedFilteringMovies = moviesJson;

  if (query) {
    const normalizedQuery = query.toLowerCase().trim();

    if (normalizedQuery) {
      preparedFilteringMovies = preparedFilteringMovies.filter(movie => {
        return (
          movie.title.toLowerCase().includes(normalizedQuery) ||
          movie.description.toLowerCase().includes(normalizedQuery)
        );
      });
    }
  }

  return preparedFilteringMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getFilteringMovies(moviesFromServer, { query });

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
                onChange={e => setQuery(e.target.value)}
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
