import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilteredMovies(movies, query) {
  if (query) {
    const trimmedQuery = query.trim();

    return movies.filter(
      movie => movie.title.toLowerCase().includes(trimmedQuery.toLowerCase())
      || movie.description.toLowerCase().includes(trimmedQuery.toLowerCase()),
    );
  }

  return movies;
}

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const visibleMovies = getFilteredMovies(
    moviesFromServer,
    searchQuery,
  );

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
                onChange={event => setSearchQuery(event.target.value)}
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

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
