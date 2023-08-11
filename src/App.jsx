import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filteredMovies = (movies, query) => {
  const queryToLowerCase = query.trim().toLowerCase();

  if (!queryToLowerCase) {
    return movies;
  }

  return movies.filter((movie) => {
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();

    return title.includes(queryToLowerCase)
    || description.includes(queryToLowerCase);
  });
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filteredMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
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
                value={query}
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
