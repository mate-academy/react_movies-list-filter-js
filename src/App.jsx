import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getVisibleMovies(query) {
  const answer = moviesFromServer.filter(movie => (
    movie.title.toLowerCase().includes(query.toLowerCase())
    || movie.description.toLowerCase().includes(query.toLowerCase())
  ));

  return answer;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getVisibleMovies(query);

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
                onChange={(e) => {
                  setQuery(e.target.value.trim());
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
