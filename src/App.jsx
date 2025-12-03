import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovie(list, query) {
  const copyMovies = [...list];
  const updatedQuery = query.trim().toLowerCase();

  return copyMovies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(updatedQuery) ||
      movie.description.toLowerCase().includes(updatedQuery)
    );
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovie(moviesFromServer, query);

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
                  setQuery(event.currentTarget.value);
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
