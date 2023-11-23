import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies, query) {
  if (query) {
    const preparedQuery = query.trim().toLowerCase();

    return movies.filter((movie) => {
      const preparedTitle = movie.title.toLowerCase();
      const preparedDescription = movie.description.toLowerCase();

      return preparedTitle.includes(preparedQuery)
        || preparedDescription.includes(preparedQuery);
    });
  }

  return movies;
}

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, searchQuery);

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
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
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
