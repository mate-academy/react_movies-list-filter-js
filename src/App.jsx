import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getVisibleMovies = (movies, { sortBy }) => {
  let filteredMovies = [...movies];
  const sort = sortBy.trim().toLowerCase();

  if (sort) {
    /* eslint-disable-next-line */
    filteredMovies = filteredMovies.filter((movie) => {
      const title = movie.title.toLowerCase();
      const description = movie.description.toLowerCase();

      if (title.includes(sort) || description.includes(sort)) {
        return movie;
      }
    });
  }

  return filteredMovies;
};

export const App = () => {
  const [sortBy, setSortBy] = useState('');
  const visibleMovies = getVisibleMovies(moviesFromServer, { sortBy });

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
                onChange={e => setSortBy(e.target.value)}
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
