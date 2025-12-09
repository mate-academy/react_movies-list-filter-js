import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function preparList(list, query) {
  if (query) {
    const newQuery = query.trim().toLowerCase();

    return list.filter(
      movie =>
        movie.title.toLowerCase().includes(newQuery) ||
        movie.description.toLowerCase().includes(newQuery),
    );
  }

  return list;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = preparList(moviesFromServer, query);

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
                  setQuery(event.target.value);
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
