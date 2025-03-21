import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const isQueryIncludes = (a, b) => {
  return a.toLowerCase().trim().includes(b.toLowerCase().trim());
};

export const App = () => {
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  const filteredMovies = query => {
    setVisibleMovies(
      moviesFromServer.filter(
        movie =>
          isQueryIncludes(movie.title, query) ||
          isQueryIncludes(movie.description, query),
      ),
    );
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
                onChange={event => {
                  filteredMovies(event.target.value);
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
