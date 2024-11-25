import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const moviesList = moviesFromServer.filter(
    movie =>
      movie.description.toLowerCase().includes(query.toLowerCase().trim()) ||
      movie.title.toLowerCase().includes(query.toLowerCase().trim()),
  );

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
                onChange={e => {
                  setQuery(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={moviesList} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
