import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedGoods(movies, query) {
  if (!query) {
    return movies;
  }

  const lowerCaseQuery = query.trim().toLowerCase();

  return movies.filter(
    movie =>
      movie.title.toLowerCase().includes(lowerCaseQuery) ||
      movie.description.toLowerCase().includes(lowerCaseQuery),
  );
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getPreparedGoods(moviesFromServer, query);

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
