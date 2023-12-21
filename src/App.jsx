import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getSearchFilter(movies, query) {
  const moviesArray = [...movies];
  let filteredMovies = [];
  let lowerCaseQuery = '';

  if (query) {
    lowerCaseQuery = query.trim().toLowerCase();
  }

  filteredMovies = moviesArray.filter((movie) => {
    const titles = movie.title.toLowerCase();
    const descriptions = movie.description.toLowerCase();

    return (
      titles.includes(lowerCaseQuery) || descriptions.includes(lowerCaseQuery)
    );
  });

  return filteredMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getSearchFilter(moviesFromServer, query);

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
                onChange={e => setQuery(e.target.value)}
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
