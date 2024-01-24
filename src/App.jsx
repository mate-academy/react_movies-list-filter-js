import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function sortedFilms(query) {
  let filteresMovies = [...moviesFromServer];

  filteresMovies = filteresMovies.filter((movie) => {
    const { title, description } = movie;

    return (
      title.toLowerCase().includes(query.trim().toLowerCase())
      || description.toLowerCase().includes(query.trim().toLowerCase(``))
    );
  });

  return filteresMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = sortedFilms(query);

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

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
