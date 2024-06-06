import './App.scss';
import { useState, useEffect } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([...moviesFromServer]);

  useEffect(() => {
    const filterMovies = inputValue => {
      if (inputValue) {
        return moviesFromServer.filter(
          movie =>
            movie.title
              .toLowerCase()
              .includes(inputValue.trim().toLowerCase()) ||
            movie.description
              .toLowerCase()
              .includes(inputValue.trim().toLowerCase()),
        );
      }

      return moviesFromServer;
    };

    setFilteredMovies(filterMovies(searchInput));
  }, [searchInput]);

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
                value={searchInput}
                onChange={event => setSearchInput(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
