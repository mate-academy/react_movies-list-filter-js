import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(movies, sortField) {
  const copyMovies = [...movies];
  const lowerFilter = sortField.toLowerCase().trim();

  if (sortField) {
    return copyMovies.filter(
      movie => movie.title.toLowerCase().trim().includes(lowerFilter)
        || movie.description.toLowerCase().trim().includes(lowerFilter),
    );
  }

  return copyMovies;
}

export const App = () => {
  const [searchField, setSearchField] = useState('');
  const visibleMovies = filterMovies(moviesFromServer, searchField);

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
                onChange={event => setSearchField(event.currentTarget.value)}
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
