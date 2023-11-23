import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function movieFilter(movies, searchQuery) {
  if (!searchQuery) {
    return movies;
  }

  return movies.filter((movie) => {
    const preparedSearchQuery = searchQuery.toLowerCase().trim();
    const preparedMovieTitle = movie.title.toLowerCase();
    const preparedMovieDescription = movie.description.toLowerCase();

    return preparedMovieTitle.includes(preparedSearchQuery)
      || preparedMovieDescription.includes(preparedSearchQuery);
  });
}

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const visibleMovies = movieFilter(moviesFromServer, searchQuery);

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
                  setSearchQuery(event.target.value);
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
