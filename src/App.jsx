import './App.scss';
import { useState, useMemo } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies, query) {
  const preparedQuery = query.toLowerCase().trim();

  const filteredMovies = movies.filter((movie) => {
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();

    return title.includes(preparedQuery) || description.includes(preparedQuery);
  });

  return filteredMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = useMemo(
    () => getPreparedMovies(moviesFromServer, query),
    [query],
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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={event => setQuery(event.target.value)}
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
