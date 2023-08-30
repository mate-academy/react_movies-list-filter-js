import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

// const TITLE = 'title';
// const DESCRIPTION = 'description';

function filterMoviesByQuery(movies, query) {
  if (!query) {
    return movies;
  }

  return movies.filter(({ title, description }) => (
    hasQueryInContent(title, query)
    || hasQueryInContent(description, query)
  ));
}

function hasQueryInContent(content, query) {
  const normalizedQuery = query.trim().toLowerCase();

  return content.toLowerCase().includes(normalizedQuery);
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterMoviesByQuery(moviesFromServer, query);

  function onChange(inputText) {
    setQuery(inputText);
  }

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
                onChange={(event) => {
                  onChange(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
