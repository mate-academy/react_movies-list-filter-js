import './App.scss';
import { useState, useEffect } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getMoviesFromServer = (moviesList, query) => {
  const trimmedQuery = query.trim().toLowerCase();

  if (!trimmedQuery) {
    return moviesList;
  }

  return moviesList.filter(movie => movie.title
    .toLowerCase().includes(trimmedQuery)
    || movie.description.toLowerCase().includes(trimmedQuery));
};

export const App = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState([]);

  useEffect(() => {
    setVisibleMovies(getMoviesFromServer(moviesFromServer, query));
  }, [query]);

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
                onChange={event => setQuery(event.target.value)}
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
