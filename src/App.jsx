import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

const getFilteredMovies = (movies, query) => {
  const filteredMovies = [...movies];
  const searchRequest = query.trim().toLowerCase();

  if (!searchRequest) {
    return filteredMovies;
  }

  return filteredMovies.filter(
    movie =>
      movie.title.toLowerCase().includes(searchRequest) ||
      movie.description.toLowerCase().includes(searchRequest),
  );
};

export const App = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const filteredMovies = getFilteredMovies(moviesFromServer, query);

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
                onChange={handleInputChange}
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
