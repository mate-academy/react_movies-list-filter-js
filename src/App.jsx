import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  function filter(movies, value) {
    let movieArray = [...movies];
    const clearQuery = value.trim().toLowerCase();

    if (value) {
      movieArray = movieArray.filter(
        movie =>
          movie.title.toLowerCase().includes(clearQuery) ||
          movie.description.toLowerCase().includes(clearQuery),
      );
    }

    return movieArray;
  }

  const visibleMovies = filter(moviesFromServer, query);

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
                onChange={e => setQuery(e.target.value)}
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
