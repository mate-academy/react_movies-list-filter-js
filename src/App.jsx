import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getMovies(movies, query) {
  let moviesCopy = [...movies];

  if (query) {
    moviesCopy = moviesCopy.filter((movie) => {
      const isTitle = movie.title.toLowerCase()
        .includes(query.trim().toLowerCase());
      const isDescription = movie.description.toLowerCase()
        .includes(query.trim().toLowerCase());

      return isTitle || isDescription;
    });
  }

  return moviesCopy;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getMovies(moviesFromServer, query);

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
                onChange={(event) => {
                  setQuery(event.target.value);
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
