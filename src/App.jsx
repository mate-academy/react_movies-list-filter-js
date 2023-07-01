import { useState, useMemo } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import './App.scss';

function getFilteredMovies(movies, query) {
  return movies.filter(movie => (isContainText(movie.title, query)
    || isContainText(movie.description, query)));
}

function isContainText(str, search) {
  return str.toLowerCase().includes(search.toLowerCase());
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies
  = useMemo(() => getFilteredMovies(moviesFromServer, query), [query]);

  const handleSearchChange = (event) => {
    setQuery(event.target.value.trim());
  };

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
                onChange={handleSearchChange}
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
