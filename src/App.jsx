import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function processMovies(movies, query) {
  const lowerCaseQuery = query.toLowerCase().trim();

  if (!lowerCaseQuery) {
    return movies;
  }

  const filteredMovies = movies.filter(movie => {
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();

    return (
      title.includes(lowerCaseQuery) || description.includes(lowerCaseQuery)
    );
  });

  return filteredMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = processMovies(moviesFromServer, query);

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
                onChange={e => {
                  setQuery(e.target.value);
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
