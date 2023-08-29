import { useState } from 'react';

import moviesFromServer from './api/movies.json';
import './App.scss';
import { MoviesList } from './components/MoviesList';

function getFilteredMovies(movies, query) {
  return movies.filter((movie) => {
    const titleForSearch = movie.title.toLowerCase();
    const descriptionForSearch = movie.description.toLowerCase();
    const searchingElement = query.toLowerCase().trim();

    return (
      titleForSearch.includes(searchingElement)
      || descriptionForSearch.includes(searchingElement)
    );
  });
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getFilteredMovies(moviesFromServer, query);

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
                onChange={(event) => {
                  setQuery(event.target.value);
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
