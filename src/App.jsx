import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const variablesMovie = (movies, query) => {
  let prepearedMovies = [...movies];

  if (query) {
    const goodQuery = query.trim().toLowerCase();

    prepearedMovies = prepearedMovies.filter(movie => {
      return (
        movie.title.toLowerCase().includes(goodQuery) ||
        movie.description.toLowerCase().includes(goodQuery)
      );
    });
  }

  return prepearedMovies;
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = variablesMovie(moviesFromServer, query);

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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={event => setQuery(event.target.value.trimStart())}
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
