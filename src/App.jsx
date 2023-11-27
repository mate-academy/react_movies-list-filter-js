import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterQuery(input) {
  let visibleMovies = [...moviesFromServer];

  if (input) {
    visibleMovies = moviesFromServer.filter((movie) => {
      const { title, description } = movie;
      const trimmed = input.trim().toLowerCase();

      return title.toLowerCase().includes(trimmed)
             || description.toLowerCase().includes(trimmed);
    });
  }

  return visibleMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

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
                onChange={handleQueryChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filterQuery(query)} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
