import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function prepareMovies(movies, query) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return movies;
  }

  return movies.filter(({ title, description }) => {
    return [title, description].some(text => {
      return text?.toLowerCase().includes(normalizedQuery);
    });
  });
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovi = prepareMovies(moviesFromServer, query);

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
                onChange={event => {
                  setQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovi} />
      </div>
      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
