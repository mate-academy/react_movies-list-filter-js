import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const filtredMovies = moviesFromServer.filter(
    el =>
      el.title.toLowerCase().includes(query) ||
      el.description.toLowerCase().includes(query),
  );

  const onChange = e => setQuery(e.target.value.toLowerCase().trim());

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
                onChange={onChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filtredMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
