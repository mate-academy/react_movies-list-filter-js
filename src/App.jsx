import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterBy(movies, searchQuery) {
  if (!searchQuery) {
    return movies;
  }

  const visibleMovies = movies.filter(
    movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      movie.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase().trim()),
  );

  return visibleMovies;
}

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

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
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filterBy(moviesFromServer, searchQuery)} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
