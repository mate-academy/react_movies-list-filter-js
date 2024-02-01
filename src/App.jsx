import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function searchMovie(movies, { query }) {
  let currentMovies = [...movies];

  if (query) {
    currentMovies = currentMovies.filter((movie) => {
      const targetQuery = query.trim().toLowerCase();
      const lowTitle = movie.title.toLowerCase();
      const lowDescription = movie.description.toLowerCase();

      return (
        lowTitle.includes(targetQuery) || lowDescription.includes(targetQuery)
      );
    });
  }

  return currentMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = searchMovie(moviesFromServer, { query });

  function filterMovie(event) {
    setQuery(event.target.value);
  }

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
                onChange={filterMovie}
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

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
