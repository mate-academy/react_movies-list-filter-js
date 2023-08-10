import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function prepareMovies(movies, sortBy) {
  let prepareArr = [...movies];

  if (sortBy) {
    const filterBy = sortBy.toLowerCase().trim();

    prepareArr = prepareArr.filter(
      element => element.title.toLowerCase().includes(filterBy)
        || element.description.toLowerCase().includes(filterBy),
    );
  }

  return prepareArr;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const sortMovies = prepareMovies(moviesFromServer, query);

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
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
                value={query}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={sortMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
