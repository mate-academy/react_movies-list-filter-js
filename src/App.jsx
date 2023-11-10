import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  const handleOnChange = (e) => {
    const searchValue = e.target.value;
    const matchedMovies = [];

    setQuery(searchValue);

    [...moviesFromServer].forEach((movie) => {
      if (
        movie.title
          .toLowerCase()
          .includes(searchValue.toLowerCase().trim())
        || movie.description
          .toLowerCase()
          .includes(searchValue.toLowerCase().trim())) {
        matchedMovies.push(movie);
      }
    });

    setVisibleMovies(matchedMovies);
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
                value={query}
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={handleOnChange}
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
