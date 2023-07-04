import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const makeLowerCaseAndRemoveSpace = query => query.toLowerCase().trim();

function getPreperedMoviesFromServer(movies, { query }) {
  let preperedMovies = movies;

  if (query) {
    preperedMovies = preperedMovies.filter(
      (movie) => {
        const title = makeLowerCaseAndRemoveSpace(movie.title);
        const description = makeLowerCaseAndRemoveSpace(movie.description);
        const queryState = makeLowerCaseAndRemoveSpace(query);

        return title.includes(queryState) || description.includes(queryState);
      },
    );
  }

  return preperedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreperedMoviesFromServer(moviesFromServer, {
    query,
  });

  const setQueryChange = event => setQuery(event.currentTarget.value);

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
                onChange={setQueryChange}
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
