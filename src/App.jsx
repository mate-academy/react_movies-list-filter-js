import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getVisibleMovies(movies, sortParametr) {
  let finalMovies = [...movies];
  const transformParameter = sortParametr.toLowerCase().trim();

  if (transformParameter) {
    finalMovies = finalMovies.filter(element => (
      element.title.toLowerCase().includes(transformParameter)
      || element.description.toLowerCase().includes(transformParameter)
    ));
  }

  return finalMovies;
}

export const App = () => {
  const [sortFilter, setSortFilter] = useState('');
  const visibleMovies = getVisibleMovies(moviesFromServer, sortFilter);

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
                onChange={(query) => {
                  setSortFilter(query.target.value);
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
