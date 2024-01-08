import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(movies, query) {
  const normalizedQuery = query.trim().toLowerCase();
  let copyMovies = [...movies];

  if (normalizedQuery) {
    copyMovies = copyMovies.filter(
      movie => movie.title.toLowerCase().includes(normalizedQuery)
        || movie.description.toLowerCase().includes(normalizedQuery),
    );
  }

  return copyMovies;
}

export const App = () => {
  const [sortField, setSortField] = useState('');
  const visibleMovies = filterMovies(moviesFromServer, sortField);

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
                onChange={(event) => {
                  setSortField(event.target.value);
                }}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={visibleMovies}
        />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
