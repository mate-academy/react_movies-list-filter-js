import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const clearText = text => text.trim().toLowerCase();

function filterMovies(movies, query) {
  if (!query) {
    return movies;
  }

  const clearedQuery = clearText(query);

  return movies.filter(movie => {
    const movieTitle = movie.title.toLowerCase();
    const movieDescription = movie.description.toLowerCase();

    const inMovieTitle = movieTitle.includes(clearedQuery);
    const inMovieDescription = movieDescription.includes(clearedQuery);

    return inMovieTitle || inMovieDescription;
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterMovies(moviesFromServer, query);

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
                value={query}
                onChange={event => {
                  setQuery(event.target.value);
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

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
