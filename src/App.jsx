/* eslint-disable function-paren-newline */
/* eslint-disable no-lone-blocks */
import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function search(movies, query) {
  let serchedMovies = movies;

  if (query) {
    const queryNormolized = query.trim().toLowerCase();

    serchedMovies = movies.filter(
      movie =>
        (movie.title || '').toLowerCase().includes(queryNormolized) ||
        (movie.description || '').toLowerCase().includes(queryNormolized),
    );
  }

  return serchedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = search(moviesFromServer, query);

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
                onChange={event => {
                  {
                    setQuery(event.target.value);
                  }
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
