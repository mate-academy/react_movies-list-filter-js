import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovieList(movies, { query }) {
  let preparedMovies = movies;
  const changedQuery = query.toLowerCase().trim().replace(/\s+/g, ' ');

  if (query) {
    preparedMovies = movies.filter(
      movie =>
        movie.title.toLowerCase().includes(changedQuery) ||
        movie.description.toLowerCase().includes(changedQuery),
    );
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovieList = getPreparedMovieList(moviesFromServer, { query });

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
                onChange={event => {
                  setQuery(event.target.value);
                }}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovieList} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
