import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(movies, filterBy) {
  let visibleMovies = [...movies];

  if (filterBy) {
    visibleMovies = visibleMovies.filter(
      movie =>
        movie.title.toLowerCase().includes(filterBy.toLowerCase()) ||
        movie.description.toLowerCase().includes(filterBy.toLowerCase()),
    );
  }

  return visibleMovies;
}

export const App = () => {
  const [textFilter, setTextFilter] = useState('');

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
                onChange={event => setTextFilter(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={filterMovies(moviesFromServer, textFilter.trim())}
        />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
