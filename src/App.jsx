import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const getIncludedString = string => (
    string
      .toLowerCase()
      .includes(
        query
          .trim()
          .toLowerCase(),
      )
  );

  const getSearchedMovies = movies => (
    movies.filter(({ title, description }) => (
      getIncludedString(title)
      || getIncludedString(description)
    )));
  const searchedMovies = getSearchedMovies(moviesFromServer);

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
                onChange={event => (setQuery(event.target.value))}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={searchedMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
