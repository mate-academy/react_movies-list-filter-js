import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = [...moviesFromServer];

  const filterMovies = () => {
    const normalizeQuery = query.toLowerCase().trim();

    return visibleMovies.filter(movie => {
      return (
        movie.title.toLowerCase().includes(normalizeQuery) ||
        movie.description.toLowerCase().includes(normalizeQuery)
      );
    });
  };

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

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
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filterMovies()} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
