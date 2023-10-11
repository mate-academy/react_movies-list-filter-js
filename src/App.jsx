import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilterMovie(movies, query) {
  let visibleMovies = [...movies];

  if (query) {
    const normalizeQuery = query.trim().toLowerCase();

    visibleMovies = visibleMovies.filter(movie => (
      movie.title.toLowerCase().includes(normalizeQuery)
      || movie.description.toLowerCase().includes(normalizeQuery)
    ));
  }

  return visibleMovies;
}

export const App = () => {
  const [query, SetQuery] = useState('');
  const visibleMovies = getFilterMovie(moviesFromServer, query);

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
                onChange={(event) => {
                  SetQuery(event.target.value);
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
