import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getFilteredMovies = (movies, query) => {
  const filteredMovies = [...movies];

  if (query) {
    return filteredMovies.filter(movie => {
      const { title, description } = movie;

      if (
        title.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query)
      ) {
        return movie;
      }

      return false;
    });
  }

  return filteredMovies;
};

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getFilteredMovies(
    moviesFromServer,
    query.toLowerCase().trim(),
  );

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
                onChange={e => setQuery(e.target.value)}
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
