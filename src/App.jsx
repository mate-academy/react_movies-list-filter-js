import { useState } from 'react';
import './App.scss';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(moviesList, filterQuery) {
  const preparedMovies = moviesList.filter(
    movie =>
      movie.title.toLowerCase().includes(filterQuery) ||
      movie.description.toLowerCase().includes(filterQuery),
  );

  return preparedMovies;
}

export function App() {
  const [query, setQuery] = useState('');
  const preparedMovieList = getPreparedMovies(moviesFromServer, query);

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
                onChange={event =>
                  setQuery(event.currentTarget.value.toLowerCase().trim())
                }
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={preparedMovieList} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
}
