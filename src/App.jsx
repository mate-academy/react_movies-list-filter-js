import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilterMovies(movies, { query }) {
  let filteredMovies = movies;

  if (query) {
    const queryTrimmed = query.trim().toLowerCase();

    filteredMovies = movies.filter(movie => {
      const movieDescription = movie.description.toLowerCase();
      const movieTitle = movie.title.toLowerCase();

      return (
        movieDescription.includes(queryTrimmed) ||
        movieTitle.includes(queryTrimmed)
      );
    });
  }

  return filteredMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getFilterMovies(moviesFromServer, { query });

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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                // eslint-disable-next-line prettier/prettier
                onChange={event => {
                  setQuery(event.target.value);
                }}
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
