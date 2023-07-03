import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(movies, { query }) {
  const queryLowerCase = query.toLowerCase().trim();
  const moviesCopy = movies.filter((movie) => {
    const movieTitle = movie.title.toLowerCase();
    const movieDescription = movie.description.toLowerCase();

    return movieTitle.includes(queryLowerCase)
      || movieDescription.includes(queryLowerCase);
  });

  return moviesCopy;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const movies = filterMovies(moviesFromServer, { query });

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
                value={query}
                onChange={event => setQuery(event.currentTarget.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
