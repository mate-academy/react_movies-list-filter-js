import { useState } from 'react';
import './App.scss';
// import { set } from 'cypress/types/lodash';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const TITLE = 'title';
const DESCRIPTION = 'description';

function getMoviesToRender(movies, filterValue) {
  let preparedMovies = movies;

  if (filterValue) {
    preparedMovies = movies.filter(movie => (
      getPreparedMivieSection(movie[TITLE], filterValue)
      || getPreparedMivieSection(movie[DESCRIPTION], filterValue)
    ));
  }

  return preparedMovies;
}

function getPreparedMivieSection(movieSection, filterValue) {
  const normalizedFilterValue = filterValue.trim().toLowerCase();

  return movieSection.toLowerCase().includes(normalizedFilterValue);
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getMoviesToRender(moviesFromServer, query);

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
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
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
