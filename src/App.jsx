import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function prepareMovies(movies, searchFilter) {
  const moviesList = movies.filter((movie) => {
    const commonMovieTitle = movie.title.toLowerCase();
    const commonMovieDescription = movie.description.toLowerCase();
    const commonFilter = searchFilter.toLowerCase().trim();

    return commonMovieTitle.includes(commonFilter)
      || commonMovieDescription.includes(commonFilter);
  });

  return moviesList;
}

export const App = () => {
  const [searchFilter, setSearchFilter] = useState('');
  const visibleMovies = prepareMovies(moviesFromServer, searchFilter);

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
                value={searchFilter}
                onChange={(event) => {
                  setSearchFilter(event.target.value);
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
