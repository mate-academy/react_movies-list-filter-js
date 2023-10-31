import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function prepMovies(movies, { query }) {
  return movies.filter((movie) => {
    const lowerTitle = movie.title.toLowerCase();
    const lowerSearchState = query.trim().toLowerCase();
    const lowerDisc = movie.description.toLowerCase();

    return lowerTitle.includes(lowerSearchState)
      || lowerDisc.includes(lowerSearchState);
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = prepMovies(moviesFromServer, { query });

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
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
