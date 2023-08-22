import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(query) {
  const normaliziedQuery = query.toLowerCase().trim();

  return [...moviesFromServer].filter((movie) => {
    const normaliziedTitle = movie.title.toLowerCase().trim();
    const normaliziedDescription = movie.description.toLowerCase().trim();

    return normaliziedTitle.includes(normaliziedQuery)
      || normaliziedDescription.includes(normaliziedQuery);
  });
}

export const App = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filterMovies(query)} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
