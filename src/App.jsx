import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, query);

  function getPreparedMovies(movies, filterBy) {
    let preparedMovies = movies;

    const normalizedQuery = filterBy.toLowerCase().trim();

    if (filterBy) {
      preparedMovies = preparedMovies.filter(
        movie => movie.title.toLowerCase().includes(normalizedQuery)
        || movie.description.toLowerCase().includes(normalizedQuery),
      );
    }

    return preparedMovies;
  }

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
                onChange={event => setQuery(event.currentTarget.value)}
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
