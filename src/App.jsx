import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filtedMovies = (movies, symbols) => {
  const normalizedSeach = symbols.trim().toLowerCase();

  if (normalizedSeach) {
    return movies.filter(
      movie =>
        movie.title.toLowerCase().includes(normalizedSeach) ||
        movie.description.toLowerCase().includes(normalizedSeach),
    );
  }

  return movies;
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filtedMovies(moviesFromServer, query);

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
                onChange={event => {
                  setQuery(event.target.value);
                }}
                id="search-query"
                className="input"
                placeholder="Type search word"
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
