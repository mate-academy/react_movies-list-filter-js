import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filtration = (wordsFromKeboard, movies) => {
  const copy = wordsFromKeboard.trim().toLowerCase();

  return movies.filter(
    movie =>
      movie.title.toLowerCase().includes(copy) ||
      movie.description.toLowerCase().includes(copy),
  );
};

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(moviesFromServer);

  const handleSearchChange = event => {
    const query = event.target.value;

    setSearchQuery(query);
    setFilteredMovies(filtration(query, moviesFromServer));
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
                value={searchQuery}
              />
            </div>
          </div>
        </div>

        <MoviesList filteredMovies={filteredMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
