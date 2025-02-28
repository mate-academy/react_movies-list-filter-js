import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getSortList(movies, query) {
  let newMovies = [...movies];
  const newQuery = query.trim();

  if (newQuery) {
    newMovies = newMovies.filter(
      movie =>
        movie.description.toLowerCase().includes(newQuery.toLowerCase()) ||
        movie.title.toLowerCase().includes(newQuery.toLowerCase()),
    );
  }

  return newMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getSortList(moviesFromServer, query);

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
                onChange={event => setQuery(event.target.value)}
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
