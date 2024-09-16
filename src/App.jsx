import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getVisibleMovies(movies, { query }) {
  let visibleMovies = [...movies];

  if (query) {
    visibleMovies = visibleMovies.filter(
      movie =>
        movie.title.toUpperCase().includes(query.toUpperCase().trim()) ||
        movie.description.toUpperCase().includes(query.toUpperCase().trim()),
    );
  }

  return visibleMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const filteredMovies = getVisibleMovies(moviesFromServer, { query });

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
                onChange={event => {
                  setQuery(event.currentTarget.value);
                }}
              />
            </div>
          </div>
        </div>
        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
