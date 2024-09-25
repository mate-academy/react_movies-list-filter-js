import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(query) {
  const movies = [...moviesFromServer];

  if (query.length === 0) {
    return movies;
  }

  const queryLower = query.trim().toLowerCase();

  const filteredMovies = movies.filter(
    movie =>
      movie.title.trim().toLowerCase().includes(queryLower) ||
      movie.description.trim().toLowerCase().includes(queryLower),
  );

  return filteredMovies;
}

export const App = () => {
  const [sortQuery, setSortQuery] = useState('');
  const visibleMovies = getPreparedMovies(sortQuery);

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
                onChange={e => setSortQuery(e.target.value)}
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
