import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPrepearedMovies(movies, { query }) {
  let prepearedMovies = [...movies];

  if (query) {
    prepearedMovies = prepearedMovies.filter(
      movie =>
        movie.title.toLowerCase().includes(query.trim().toLowerCase()) ||
        movie.description.toLowerCase().includes(query.trim().toLowerCase()),
    );
  }

  return prepearedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const filterBy = value => {
    setQuery(value);
  };

  const visibleMovies = getPrepearedMovies(moviesFromServer, { query });

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
                value={query}
                onChange={event => {
                  filterBy(event.currentTarget.value);
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
