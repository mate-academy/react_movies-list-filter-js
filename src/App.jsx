import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies, { query }) {
  let preparedMovies = [...movies];
  const queryToLowerCase = query.toLowerCase().trim();

  if (query) {
    /* eslint-disable-next-line */
    preparedMovies = preparedMovies.filter(movie => movie.title.toLowerCase().includes(queryToLowerCase)
    || movie.description.toLowerCase().includes(queryToLowerCase));
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getPreparedMovies(moviesFromServer,
    { query });

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
                onChange={event => setQuery(event.currentTarget.value)}
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
