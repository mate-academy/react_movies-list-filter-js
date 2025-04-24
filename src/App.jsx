import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterBy(movies, query) {
  let preparedMovies = [...movies];

  if (query) {
    const queryCorrected = query.trim().toLowerCase();

    preparedMovies = preparedMovies.filter(movie => {
      return (
        movie.title.trim().toLowerCase().includes(queryCorrected) ||
        movie.description.trim().toLowerCase().includes(queryCorrected)
      );
    });
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterBy(moviesFromServer, query);

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
                onChange={e => setQuery(e.currentTarget.value)}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
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
