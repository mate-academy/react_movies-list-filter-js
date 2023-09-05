import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function hasSearchQuery(movie, query) {
  return checkQuery(movie.title, query)
    || checkQuery(movie.description, query);
}

function checkQuery(string, query) {
  const lowercasedQuery = query.toLowerCase();

  return string.toLowerCase().includes(lowercasedQuery);
}

function getMoviesToRender(movies, query) {
  return movies.filter(movie => hasSearchQuery(movie, query));
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getMoviesToRender(moviesFromServer, query);

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
                onChange={
                  event => setQuery(event.target.value.trim().toLowerCase())
                }
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
