import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filteredMovies(movies, currentQuery) {
  let visibleMovies = movies;

  if (currentQuery) {
    visibleMovies = visibleMovies.filter(
      movie =>
        movie.title.toLowerCase().includes(currentQuery.toLowerCase().trim()) ||
        movie.description
          .toLowerCase()
          .includes(currentQuery.toLowerCase().trim()),
    );

    return visibleMovies;
  }

  return visibleMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

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
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies(moviesFromServer, query)} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
