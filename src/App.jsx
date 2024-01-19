import { useState } from 'react';

import "./App.scss";
import { MoviesList } from "./components/MoviesList";
import moviesFromServer from "./api/movies.json";

export const App = () => {
  const [filter, setFilter] = useState('');
  const visibleMovies = moviesFromServer.filter(movie => (
    (movie.title.toLowerCase()).includes(filter.toLowerCase())
    || (movie.description.toLowerCase()).includes(filter.toLowerCase())
  ));

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
                onChange={event => setFilter((event.target.value).trim())}
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
