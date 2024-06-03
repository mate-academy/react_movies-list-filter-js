import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getVisibleMovies(movies, { query }) {
  let mas = [...movies];

  if (query) {
    const upperCaseQuery = query.toUpperCase();

    mas = mas.filter(
      el =>
        el.title.toUpperCase().includes(upperCaseQuery) ||
        el.description.toUpperCase().includes(upperCaseQuery),
    );
  }

  return mas;
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
                onChange={event => {
                  setQuery(event.currentTarget.value.trim());
                }}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
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
