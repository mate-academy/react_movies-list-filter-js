import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  const filterMovies = value => {
    const normalizedValue = value.trim().toLowerCase();

    setVisibleMovies(
      moviesFromServer.filter(
        movie =>
          movie.title.toLowerCase().includes(normalizedValue) ||
          movie.description.toLowerCase().includes(normalizedValue),
      ),
    );
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
                value={query}
                className="input"
                placeholder="Type search word"
                onChange={event => {
                  const { value } = event.currentTarget;

                  setQuery(value);
                  filterMovies(value);
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
