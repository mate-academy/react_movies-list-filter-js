import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getVisibleMovies(query) {
  if (query) {
    return [...moviesFromServer]
      .filter(movie => movie.title.trim().toLowerCase()
        .includes(query.trim().toLowerCase())
        || movie.description.trim().toLowerCase()
          .includes(query.trim().toLowerCase()));
  }

  return [...moviesFromServer];
}

export const App = () => {
  const [filterQuery, setFilterQuery] = useState('');
  const visibleMovies = getVisibleMovies(filterQuery);

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
                onChange={event => setFilterQuery(event.target.value)}
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
