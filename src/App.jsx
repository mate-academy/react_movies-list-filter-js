import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';

import moviesFromServer from './api/movies.json';

const getFilteredMovies = (moviesList, filterQuery) => {
  if (filterQuery.length === 0) {
    return moviesList;
  }

  const prepearedFilterQuery = filterQuery
    .toLowerCase()
    .trim();

  return moviesList.filter((movie) => {
    const prepearedMovieTitle = movie.title.toLowerCase();
    const prepearedMovieDescription = movie.description.toLowerCase();

    return prepearedMovieTitle.includes(prepearedFilterQuery)
      || prepearedMovieDescription.includes(prepearedFilterQuery);
  });
};

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getFilteredMovies(moviesFromServer, query);

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
                onChange={e => setQuery(e.currentTarget.value)}
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
