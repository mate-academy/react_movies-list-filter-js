import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function SearchMovie(movies, query) {
  const searchedMovies = [...movies];
  const queryLower = query.trim().toLowerCase();

  if (query) {
    return searchedMovies.filter(movie => {
      const titleLower = movie.title.toLowerCase();
      const descriptionLower = movie.description.toLowerCase();

      return (
        titleLower.includes(queryLower) || descriptionLower.includes(queryLower)
      );
    });
  }

  return searchedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = SearchMovie(moviesFromServer, query);

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
                onChange={event => {
                  setQuery(event.currentTarget.value);
                }}
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
