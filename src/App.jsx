import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filteredArr = (movies, query) => {
  const clearQuery = query.trim().toLowerCase();
  let result = '';

  if (clearQuery) {
    result = movies.filter(
      movie =>
        movie.title.toLowerCase().includes(clearQuery) ||
        movie.description.toLowerCase().includes(clearQuery),
    );

    return result;
  }

  return movies;
};

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = filteredArr(moviesFromServer, query);

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
