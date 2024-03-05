import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(movies, query) {
  const queryLower = query.toLowerCase().trim();

  return movies.filter(movie => {
    const movieTitle = movie.title.toLowerCase();
    const movieDesc = movie.description.toLowerCase();

    return movieTitle.includes(queryLower) || movieDesc.includes(queryLower);
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const moviesAfterFiltering = filterMovies(moviesFromServer, query);

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
                onChange={event => {
                  setQuery(event.currentTarget.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={moviesAfterFiltering} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
