import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setQuery(event.target.value);
  };

  const lowerCaseQuery = query.trim().toLowerCase();

  const visibleMovies = moviesFromServer.filter((movie) => {
    const lowerCaseTitle = movie.title.toLowerCase();
    const lowerCaseDescription = movie.description.toLowerCase();

    return (
      lowerCaseTitle.includes(lowerCaseQuery)
      || lowerCaseDescription.includes(lowerCaseQuery)
    );
  });

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
                onChange={handleSearchInputChange}
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
