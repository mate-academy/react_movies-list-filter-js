import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  function handleSearchQuery(newQuery) {
    setQuery(newQuery);
  }

  function normalizeSearchValue(searchValue) {
    return searchValue.trim().toLocaleLowerCase();
  }

  function getVisibleMovies(searchBy) {
    const searchQuery = normalizeSearchValue(searchBy);

    return moviesFromServer.filter(
      movie =>
        movie.title.toLowerCase().includes(searchQuery) ||
        movie.description.toLowerCase().includes(searchQuery),
    );
  }

  const visibleMovies = getVisibleMovies(query);

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
                  handleSearchQuery(event.target.value);
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
