import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getVisibleMovies(movies, { filterField }) {
  let initialMovies = movies;

  if (filterField) {
    initialMovies = initialMovies
      .filter(movie => movie.title.toLowerCase()
        .includes(filterField.trim().toLowerCase())
      || movie.description.toLowerCase()
        .includes(filterField.trim().toLowerCase()));
  }

  return initialMovies;
}

export const App = () => {
  const [filterField, setFilterField] = useState('');

  const visibleMovies = getVisibleMovies(moviesFromServer, { filterField });

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
                value={filterField}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={(event) => {
                  setFilterField(event.currentTarget.value);
                }}
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
