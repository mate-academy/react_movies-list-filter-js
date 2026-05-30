import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getVisibleMovies(movies, { query }) {
  let preparedMovies = [...movies];

  const copyQuery = query.toLowerCase().trim();

  if (copyQuery) {
    preparedMovies = preparedMovies.filter(
      movie =>
        movie.title.toLowerCase().includes(copyQuery) ||
        movie.description.toLowerCase().includes(copyQuery),
    );
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getVisibleMovies(moviesFromServer, { query });

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
                value={query}
                onChange={event => {
                  setQuery(event.currentTarget.value);
                }}
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

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
