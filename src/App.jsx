import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilteredMovies(movies, { query }) {
  if (!query) {
    return movies;
  }

  return movies.filter(
    (movie) => {
      const { title, description } = movie;

      return title.toLowerCase().includes(query.toLowerCase())
        || description.toLowerCase().includes(query.toLowerCase());
    },
  );
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getFilteredMovies(
    moviesFromServer,
    { query: query.trim() },
  );

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
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
