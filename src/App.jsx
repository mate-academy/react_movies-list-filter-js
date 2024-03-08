import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFiltredMovies(movies, { query }) {
  return movies.filter(movie => {
    const onTitle = movie.title
      .toLowerCase()
      .trim()
      .includes(query.toLowerCase().trim());
    const onDescription = movie.description
      .toLowerCase()
      .trim()
      .includes(query.toLowerCase().trim());

    return onTitle || onDescription;
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getFiltredMovies([...moviesFromServer], { query });

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
