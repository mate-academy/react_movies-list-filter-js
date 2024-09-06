import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function sortMovies(movies, query) {
  const clonMovieArray = [...movies];
  const queryNormalized = query.trim().toLowerCase();

  const queryByTitle = clonMovieArray.filter(movie =>
    movie.title.toLowerCase().includes(queryNormalized),
  );
  const queryByDiscriptionPlus = clonMovieArray.filter(movie =>
    movie.description.toLowerCase().includes(queryNormalized),
  );

  queryByTitle.forEach(el => {
    if (!queryByDiscriptionPlus.includes(el)) {
      queryByDiscriptionPlus.push(el);
    }
  });

  return queryByDiscriptionPlus.sort((a1, a2) =>
    a1.title > a2.title ? 1 : -1,
  );
}

export const App = () => {
  const [query, setQuery] = useState('');

  const moviesSorted = sortMovies(moviesFromServer, query);

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
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={moviesSorted} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
