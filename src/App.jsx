import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getVisibleMovies(movies, query) {
  const destinationMovie = movies.filter(({ title, description }) => (
    lowerCaseMovie(title, query) || lowerCaseMovie(description, query)
  ));

  return destinationMovie;
}

function lowerCaseMovie(item, query) {
  const trimmedLowerQuery = query.trim().toLowerCase();

  return item.toLowerCase().includes(trimmedLowerQuery);
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getVisibleMovies(moviesFromServer, query);

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
                onChange={(changeEvent) => {
                  setQuery(changeEvent.target.value.toLowerCase());
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
