import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(allMovies, queryFind) {
  const prepareText = (text, queryInput) => text
    .toLowerCase().includes(queryInput);

  return allMovies
    .filter(({ title, description }) => prepareText(title, queryFind)
        || prepareText(description, queryFind))
    || allMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = [...moviesFromServer];
  const handleQueryChange = event => setQuery(
    event.target.value
      .trim()
      .toLowerCase(),
  );

  const preparedMovies = getPreparedMovies(visibleMovies, query);

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
                onChange={handleQueryChange}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type to start search"
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={preparedMovies}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
