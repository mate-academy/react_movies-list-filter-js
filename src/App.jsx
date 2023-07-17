import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function findMovie(movies, query) {
  if (query) {
    return movies.filter((movie) => {
      const title = movie.title.toLowerCase().trim();
      const description = movie.description.toLowerCase().trim();

      return title.includes(query.toLowerCase().trim())
      || description.includes(query.toLowerCase().trim());
    });
  }

  return movies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const getMovies = findMovie(moviesFromServer, query);

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
                onChange={(event) => {
                  setQuery(event.target.value);
                }
                }
              />
            </div>
          </div>
        </div>

        <MoviesList movies={getMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
