import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [filterQuery, setFilterQuery] = useState('');

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
                onChange={e => {
                  setFilterQuery(e.target.value.trim().toLowerCase());
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={moviesFromServer.filter(
            movie =>
              movie.title.toLowerCase().includes(filterQuery) ||
              movie.description.toLowerCase().includes(filterQuery),
          )}
        />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
