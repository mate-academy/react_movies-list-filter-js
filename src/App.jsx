import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilteredList(moviesList, normalizedQuery) {
  return moviesList.filter((movie) => {
    const normilizedTitle = movie.title.toLowerCase();
    const normalizedDescription = movie.description.toLowerCase();

    return normilizedTitle.includes(normalizedQuery)
    || normalizedDescription.includes(normalizedQuery);
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.toLowerCase().trim();
  const visibleMovies = getFilteredList(moviesFromServer, normalizedQuery);

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
