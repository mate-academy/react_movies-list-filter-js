import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilteredMovied(movies, query) {
  let prepearedFilms = [...movies];
  const editedQuery = query.toLocaleLowerCase().trim();

  if (query) {
    prepearedFilms = prepearedFilms.filter(
      movie =>
        movie.title.toLocaleLowerCase().includes(editedQuery) ||
        movie.description.toLocaleLowerCase().includes(editedQuery),
    );
  }

  return prepearedFilms;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getFilteredMovied(moviesFromServer, query);

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
                onChange={event => {
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
