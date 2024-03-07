import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilteredList(movies, query) {
  let prepareMovie = [...movies];
  const SEARCH_QUARY = query.trim();

  if (query) {
    prepareMovie = movies.filter(
      movie =>
        movie.title.toLowerCase().includes(SEARCH_QUARY.toLowerCase()) ||
        movie.description.toLowerCase().includes(SEARCH_QUARY.toLowerCase()),
    );
  }

  return prepareMovie;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getFilteredList(moviesFromServer, query);

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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={event => {
                  setQuery(event.currentTarget.value);
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
