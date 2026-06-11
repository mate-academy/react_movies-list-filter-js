import { useState } from 'react';
import moviesFromServer from './api/movies.json';
import './App.scss';
import { MoviesList } from './components/MoviesList';

const getVisibleMovies = (movies, query) => {
  const copyMovies = [...movies];

  if (query) {
    return copyMovies.filter(
      ({ title, description }) =>
        title.toLowerCase().trim().includes(query.toLowerCase().trim()) ||
        description.toLowerCase().trim().includes(query.toLowerCase().trim()),
    );
  }

  return copyMovies;
};

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getVisibleMovies(moviesFromServer, query);

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
                onChange={e => {
                  const { value } = e.target;

                  setQuery(value);
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
