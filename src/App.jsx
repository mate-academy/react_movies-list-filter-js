import { useState, useEffect } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  const filterMovies = () => {
    const searchQuery = query.toLowerCase().trim();

    const movieSearch = moviesFromServer.filter((movie) => {
      const { title, description } = movie;

      return (
        title.toLowerCase().includes(searchQuery)
        || description.toLowerCase().includes(searchQuery)
      );
    });

    setFilteredMovies(movieSearch);
  };

  useEffect(() => {
    filterMovies();
  }, [query]);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <div className="control">
              <label htmlFor="search-query" className="label">
                Search movie
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  onChange={event => (setQuery(event.target.value))}
                />
              </label>
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
