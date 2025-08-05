import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function prepareMovi(movis, query) {
  let preparedMovi = movis;
  const normalizedQuery = query.trim().toLowerCase();

  if (normalizedQuery) {
    preparedMovi = preparedMovi.filter(
      movie =>
        movie.description.toLowerCase().includes(normalizedQuery) ||
        movie.title.toLowerCase().includes(normalizedQuery),
    );
  }

  return preparedMovi;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovi = prepareMovi(moviesFromServer, query);

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
