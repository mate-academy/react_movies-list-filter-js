import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function findMovie(movies, query) {
  let filteredMovies = movies;
  const normalizeQuery = query.toLowerCase().trim();

  if (normalizeQuery) {
    filteredMovies = movies.filter((movie) => {
      const { title, description } = movie;

      return title.toLowerCase().includes(normalizeQuery)
      || description.toLowerCase().includes(normalizeQuery);
    });
  }

  return filteredMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const filteredMovies = findMovie([...moviesFromServer], query);

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

        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
