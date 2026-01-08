import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies, { query }) {
  if (query) {
    const normalizedQuery = query.trim().toLowerCase();

    return movies.filter(movie => {
      const titleLower = movie.title.toLowerCase() || '';
      const descriptionLower = movie.description.toLowerCase() || '';

      return (
        titleLower.includes(normalizedQuery) ||
        descriptionLower.includes(normalizedQuery)
      );
    });
  }

  return movies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const filterBy = newValue => {
    setQuery(newValue);
  };

  const visibleMovies = getPreparedMovies(moviesFromServer, { query });

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
                value={query}
                onChange={event => {
                  filterBy(event.target.value);
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
