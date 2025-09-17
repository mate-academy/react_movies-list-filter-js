import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const handleChange = (event) => setQuery(event.target.value);

  const normalizedQuery = query.trim().toLowerCase();
  const visibleMovies = moviesFromServer.filter(movie => {
    const description = (movie.description ?? '').toLowerCase();

    return (
      movie.title.toLowerCase().includes(normalizedQuery) ||
      description.includes(normalizedQuery)
    );
  });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            {/* <button
              onClick={() => {
                setQuery('');
              }}
              >
                Reset
              </button> */}
            {/* При желании, можно добавить кнопку, Reset, которая будет чистить поиск */}

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={handleChange}
                // onChange={event => {
                //   setQuery(event.currentTarget.value);
                // }}
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
