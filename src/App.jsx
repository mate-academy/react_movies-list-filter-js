import './App.scss';
import { useState } from 'react';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

const getFilterMovies = (movies, query) => {
  const copyMovies = [...movies];
  const normalizedQuery = query.trim().toLowerCase();

  if (!query) {
    return copyMovies;
  }

  return copyMovies.filter(
    movie =>
      movie.title.toLowerCase().includes(normalizedQuery) ||
      movie.description.toLowerCase().includes(normalizedQuery),
  );
};

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getFilterMovies(moviesFromServer, query);

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
                onChange={e => setQuery(e.target.value)}
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
