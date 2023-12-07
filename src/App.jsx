import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  function filterMovies(query) {
    const movies = [...moviesFromServer].filter((movie) => {
      const preparedQuery = query.trim().split(' ').join('').toLowerCase();
      const prearedTitle = movie.title.split(' ').join('').toLowerCase();
      const prearedDescription = movie.description
        .split(' ').join('').toLowerCase();

      if (prearedTitle.includes(preparedQuery)
        || prearedDescription.includes(preparedQuery)) {
        return true;
      }

      return false;
    });

    setVisibleMovies(movies);
  }

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
                onChange={(event) => {
                  filterMovies(event.target.value);
                }}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
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
