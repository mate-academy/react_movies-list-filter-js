import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getVisibleMovies(movies, { query }) {
  const initialMovies = movies;
  const cleanedQuery = query.trim().toLowerCase();

  if (!query) {
    return initialMovies;
  }

  return initialMovies
    .filter(({ title, description }) => (
      title.toLowerCase()
        .includes(cleanedQuery)
      || description.toLowerCase()
        .includes(cleanedQuery)
    ));
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getVisibleMovies(moviesFromServer, { query });

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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
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
