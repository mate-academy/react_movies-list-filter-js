import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilteredMovies(movies, query) {
  const normalizedQuery = query.trim().toLowerCase();

  return movies.filter(({ title, description }) => {
    const searchableText = `${title}\n${description}`.toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getFilteredMovies(moviesFromServer, query);

  const handleQueryChange = event => setQuery(event.target.value);

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
                onChange={handleQueryChange}
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
