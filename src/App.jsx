import { useState } from 'react';

import './App.scss';

import moviesFromServer from './api/movies.json';

import { MoviesList } from './components/MoviesList';

function visibleMoviesByQuery(movies, { query }) {
  let visibleMovies = [...movies];

  const q = query.toLowerCase().trim();

  if (query) {
    visibleMovies = visibleMovies.filter(
      movie => movie.title.toLowerCase().includes(q)
      || movie.description.toLowerCase().includes(q),
    );
  }

  return visibleMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const movies = visibleMoviesByQuery(moviesFromServer, { query });

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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={event => setQuery(event.target.value)}
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
