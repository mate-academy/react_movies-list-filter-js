import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getMatches(query) {
  return query
    ? moviesFromServer.filter(movie => (
      movie.title.toLowerCase().includes(query.toLowerCase().trim())
      || movie.description.toLowerCase().includes(query.toLowerCase().trim())
    ))
    : moviesFromServer;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getMatches(query);

  const followChanges = (occasion) => {
    setQuery(occasion.currentTarget.value);
  };

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
                onChange={event => followChanges(event)}
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
