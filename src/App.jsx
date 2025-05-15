import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const normalizedQuery = query.trim().toLowerCase();

  const visibleMovies = moviesFromServer.filter(movie => {
    const title = movie.title.trim().toLowerCase();
    const description = movie.description.trim().toLowerCase();

    return (
      title.includes(normalizedQuery) || description.includes(normalizedQuery)
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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={normalizedQuery ? visibleMovies : moviesFromServer}
        />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
