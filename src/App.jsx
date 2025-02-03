import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterBy(movies, query) {
  const trimmedQuery = query.trim();

  return movies.filter(movie => {
    return (
      movie.title.toUpperCase().includes(trimmedQuery.toUpperCase()) ||
      movie.description.toUpperCase().includes(trimmedQuery.toUpperCase())
    );
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const filteredMovies = filterBy(moviesFromServer, query);

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
                onChange={ev => setQuery(ev.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
