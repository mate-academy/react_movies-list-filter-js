import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function identifyMovies(moviesList, input) {
  return moviesList.toLowerCase().includes(input.toLowerCase().trim());
}

function filteredMovies(movie, query) {
  return movie.filter(({ title, description }) => (
    identifyMovies(title, query) || identifyMovies(description, query)
  ));
}

export const App = () => {
  const [query, setQuery] = useState('');
  const moviesInStock = filteredMovies(moviesFromServer, query);

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

        <MoviesList movies={moviesInStock} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
