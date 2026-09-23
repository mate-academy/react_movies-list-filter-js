import { useState } from 'react';

import moviesFromServer from './api/movies.json';
import './App.scss';
import { MoviesList } from './components/MoviesList';

function filterMovies(movies, searchQuery) {
  const filtredMoviesList = [];

  if (!searchQuery) {
    return movies;
  }

  const searchedCh = searchQuery.toLowerCase().trim();

  movies.forEach(movie => {
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();

    if (title.includes(searchedCh) || description.includes(searchedCh)) {
      filtredMoviesList.push(movie);
    }
  });

  return filtredMoviesList;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterMovies(moviesFromServer, query);

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
                onChange={e => setQuery(e.target.value)}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
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
