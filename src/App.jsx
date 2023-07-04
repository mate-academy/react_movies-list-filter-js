import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filtredMovies(movies, filtredField) {
  const copyOfMovies = [...movies];
  const filtredToLowerCase = filtredField.toLowerCase().trim();

  if (filtredField) {
    return copyOfMovies.filter(
      movie => movie.title.toLowerCase().trim().includes(filtredToLowerCase)
      || movie.description.toLowerCase().trim().includes(filtredToLowerCase),
    );
  }

  return copyOfMovies;
}

export const App = () => {
  const [search, setSearch] = useState('');
  const visibleMovies = filtredMovies(moviesFromServer, search);

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
                onChange={element => setSearch(element.target.value)}
                value={search}
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
