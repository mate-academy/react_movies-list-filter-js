import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(movies, query) {
  let filtered = [...movies];

  if (query) {
    const transformedQuery = query.toLowerCase().trim();

    filtered = filtered.filter(movie => {
      return (
        movie.title.toLowerCase().includes(transformedQuery) ||
        movie.description.toLowerCase().includes(transformedQuery)
      );
    });
  }

  return filtered;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const filtered = filterMovies(moviesFromServer, query);

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

        <MoviesList movies={filtered} />
      </div>
      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
