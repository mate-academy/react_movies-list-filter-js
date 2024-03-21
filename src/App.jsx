import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function makeFilterMovies(movies, { query }) {
  let filterMovies = [...movies];
  const toLowerQuery = query.trim().toLowerCase();

  if (toLowerQuery) {
    filterMovies = filterMovies.filter(
      movie =>
        /* eslint-disable-next-line */
        movie.title.toLowerCase().includes(toLowerQuery) ||
        movie.description.toLowerCase().includes(toLowerQuery),
    );
  }

  return filterMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = makeFilterMovies(moviesFromServer, { query });

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
                  setQuery(event.currentTarget.value);
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
