import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function prepareMovies(movies, { query }) {
  let preparedMovies = movies;
  const preparedQuery = query.toLowerCase().trim();

  if (query) {
    preparedMovies = preparedMovies.filter(
      movie =>
        movie.title.toLowerCase().includes(preparedQuery) ||
        movie.description.toLowerCase().includes(preparedQuery),
    );
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = prepareMovies(moviesFromServer, { query });

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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
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
