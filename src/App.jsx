import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const prepareQuery = query => {
  return query.trim().toLowerCase();
};

const prepareMovies = (movies, { query }) => {
  const preparedQuery = prepareQuery(query);

  return movies.filter(
    movie =>
      prepareQuery(movie.title).includes(preparedQuery) ||
      prepareQuery(movie.description).includes(preparedQuery),
  );
};

export const App = () => {
  const [filterQuery, setFilterQuery] = useState('');

  const visibleMovies = prepareMovies(moviesFromServer, { query: filterQuery });

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
                value={filterQuery}
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={e => setFilterQuery(e.target.value)}
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
