import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const lowerQuery = query.toLowerCase();

  function filterMovies(movies, queryToSearch) {
    return movies.filter((movie) => {
      const lowerTitle = movie.title.toLowerCase();
      const lowerDescription = movie.description.toLowerCase();

      return lowerTitle.includes(queryToSearch)
        || lowerDescription.includes(queryToSearch);
    });
  }

  const visibleMovies = filterMovies(moviesFromServer, lowerQuery);

  function handleChange(e) {
    setQuery(e.target.value.trim());
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
                onChange={handleChange}
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
