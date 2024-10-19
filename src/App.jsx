import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilterMovies(movies, { filterMovie }) {
  if (filterMovie) {
    const trimmedFilter = filterMovie.trim().toLowerCase();

    return movies.filter(
      movie =>
        movie.title.toLowerCase().includes(trimmedFilter) ||
        movie.description.toLowerCase().includes(trimmedFilter),
    );
  }

  return movies;
}

export const App = () => {
  const [filterMovie, setFilterMovie] = useState('');
  const visiableMovies = getFilterMovies(moviesFromServer, { filterMovie });

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
                onChange={event => {
                  setFilterMovie(event.target.value);
                }}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visiableMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
