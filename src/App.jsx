import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  function prepareMovies(movies, { searchQuery }) {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return movies;
    }

    return movies.filter(movie => {
      const nameMatches =
        movie.title && movie.title.toLowerCase().includes(normalizedQuery);
      const descriptionMatches =
        movie.description &&
        movie.description.toLowerCase().includes(normalizedQuery);

      return nameMatches || descriptionMatches;
    });
  }

  const visibleMovies = prepareMovies(moviesFromServer, { searchQuery: query });

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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={event => {
                  setQuery(event.target.value);
                }}
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
