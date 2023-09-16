import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filteredMovies(query, listOfMovies) {
  let preperFilms = [...listOfMovies];

  if (query) {
    preperFilms = preperFilms.filter((movie) => {
      const movieTitle = movie.title.toLowerCase();
      const queryLowerCase = query.toLowerCase().trim();
      const movieDescription = movie.description.toLowerCase();

      return movieTitle.includes(queryLowerCase)
      || movieDescription.includes(queryLowerCase);
    });
  }

  return preperFilms;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const filteredFilms = filteredMovies(query, moviesFromServer);

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
                value={query}
                onChange={(event) => {
                  setQuery(event.currentTarget.value);
                }}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={filteredFilms}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
