import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function findMovie(moviesList, query) {
  const normalizedQuery = query.toLowerCase().replace(/\s+/g, '');

  function filterCallbackFn(titleObs, descrObs) {
    const t = titleObs
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(normalizedQuery);
    const d = descrObs
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(normalizedQuery);

    return t || d;
  }

  const preparedMovies = moviesList.filter(
    ({ title, description }) => filterCallbackFn(title, description),
    // eslint-disable-next-line function-paren-newline
  );

  return preparedMovies;
}

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const visibleMovies = findMovie(moviesFromServer, searchQuery);

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
                value={searchQuery}
                onChange={changeEvent => {
                  setSearchQuery(changeEvent.target.value);
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
