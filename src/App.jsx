import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(movies, query) {
  let filteredMovies = movies;

  if (query) {
    filteredMovies = filteredMovies.filter(
      movie =>
        movie.title.toLocaleLowerCase().includes(query) ||
        movie.description.toLocaleLowerCase().includes(query),
    );
  }

  return filteredMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const lowerQuery = query.toLocaleLowerCase().trim();
  const visibleMovies = filterMovies(moviesFromServer, lowerQuery);

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
                onChange={changeEvent => setQuery(changeEvent.target.value)}
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
