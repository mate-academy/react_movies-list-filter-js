/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [filteredMovies, setFilteredMovies] = useState(moviesFromServer);
  const [searchQuery, setSearchQuery] = useState('');
  const query = searchQuery.trim().toLowerCase();

  const filterMovies = searchTerm => {
    const query = searchTerm.trim().toLowerCase();
    const filtered = moviesFromServer.filter(
      movie =>
        movie.title.toLowerCase().includes(query) ||
        movie.description.toLowerCase().includes(query),
    );

    setFilteredMovies(filtered);
  };

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
                value={searchQuery}
                onChange={event => {
                  const { value } = event.target;

                  setSearchQuery(value);
                  filterMovies(value.trim().toLowerCase());
                }}
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
