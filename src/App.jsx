import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterOfMovies(movies, { query }) {
  const normalizedQuery = query.toLowerCase().trim();

  return movies.filter((movie) => {
    const { title, description } = movie;

    return title.toLowerCase().includes(normalizedQuery)
      || description.toLowerCase().includes(normalizedQuery);
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterOfMovies(moviesFromServer, { query });

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
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
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
