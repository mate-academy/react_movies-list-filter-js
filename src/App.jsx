import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  function resultMovies(initialMovies) {
    let visibleMovies = initialMovies;
    const formattedQuery = query.trim().toLowerCase();

    if (query) {
      visibleMovies = visibleMovies.filter(
        movie =>
          movie.title.toLowerCase().includes(formattedQuery) ||
          movie.description.toLowerCase().includes(formattedQuery),
      );
    }

    return visibleMovies;
  }

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
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={resultMovies(moviesFromServer)} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
