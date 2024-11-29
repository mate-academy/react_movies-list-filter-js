import { useState } from 'react';
import { MoviesList } from './components/MoviesList';

import moviesFromServer from './api/movies.json';
import './App.scss';

const filteredMovies = (initialMovies, { query }) => {
  let movies = [...initialMovies];

  const prepareQuery = query.trim().toLowerCase();

  if (query) {
    movies = movies.filter(
      movie =>
        movie.title.toLowerCase().indexOf(prepareQuery) !== -1 ||
        movie.description.toLowerCase().indexOf(prepareQuery) !== -1,
    );
  }

  return movies;
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filteredMovies(moviesFromServer, { query });

  const onChangeQuery = e => {
    setQuery(e.target.value);
  };

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
                onChange={onChangeQuery}
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
