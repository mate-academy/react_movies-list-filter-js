import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function isContainingQuery(movie, query) {
  const lowercaseQuery = query.toLowerCase();

  return movie.title.toLowerCase().includes(lowercaseQuery)
    || movie.description.toLowerCase().includes(lowercaseQuery);
}

function getMoviesToRender(movies, query) {
  return movies.filter(movie => isContainingQuery(movie, query));
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getMoviesToRender(moviesFromServer, query);

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
                onChange={
                  event => setQuery(event.target.value.trim().toLowerCase())
                }
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
