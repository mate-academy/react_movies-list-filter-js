import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(movies, { query }) {
  const normalQuery = query.toLowerCase().trim();

  if (!normalQuery) {
    return movies;
  }

  const filteredMovies = movies.filter(movie => {
    const normaliseTitle = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();

    return (
      normaliseTitle.includes(normalQuery) || description.includes(normalQuery)
    );
  });

  return filteredMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleFilms = filterMovies(moviesFromServer, { query });

  const hendleSearch = event => {
    setQuery(event.target.value);
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
                value={query}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={hendleSearch}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleFilms} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
