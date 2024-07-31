import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const handleChange = event => {
    setQuery(event.target.value);
  };
  const movies = moviesFromServer.filter(
    item =>
      item.title.toLowerCase().includes(query.toLowerCase().trim()) ||
      item.description.toLowerCase().includes(query.toLowerCase().trim()),
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
                value={query}
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
