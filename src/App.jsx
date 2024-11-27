import { useState } from 'react';
import { MoviesList } from './components/MoviesList';

import moviesFromServer from './api/movies.json';

import './App.scss';

const adjustText = text => text.trim().toLowerCase();

const filterMovies = (movies, query) => {
  let visibleMovies = [...movies];

  visibleMovies = visibleMovies.filter(movie => {
    const adjustTitle = adjustText(movie.title);
    const adjustDescription = adjustText(movie.description);
    const adjustQuery = adjustText(query);

    return (
      adjustTitle.includes(adjustQuery) ||
      adjustDescription.includes(adjustQuery)
    );
  });

  return visibleMovies;
};

export const App = () => {
  const [query, setQuery] = useState('');

  const movies = filterMovies(moviesFromServer, query);

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
                onChange={event => setQuery(event.target.value)}
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
