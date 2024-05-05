import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPrepareMovies(movies, query) {
  let preparedMovies = [...movies];

  if (query) {
    const lowerCaseQuery = query.trim().toLowerCase();

    preparedMovies = preparedMovies.filter(
      movie =>
        movie.title.toLowerCase().includes(lowerCaseQuery) ||
        movie.description.toLowerCase().includes(lowerCaseQuery),
    );
  }

  return preparedMovies;
}

export const App = () => {
  const [sortMovies, setSortMovies] = useState('');
  const visibleMovies = getPrepareMovies(moviesFromServer, sortMovies);

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
                onChange={event => setSortMovies(event.target.value)}
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
