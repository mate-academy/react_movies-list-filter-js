import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const movieFilter = (title, description, query) => (
  title.toLowerCase().includes(query)
  || description.toLowerCase().includes(query)
);

export const App = () => {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();

  const moviesToRender = [...moviesFromServer]
    .filter(({ title, description }) => movieFilter(
      title, description, normalizedQuery,
    ));

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
                value={query}
                onChange={event => setQuery(event.target.value)}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={moviesToRender} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
