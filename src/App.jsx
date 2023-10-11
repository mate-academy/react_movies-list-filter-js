import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filteredMovies = (movies, { query }) => {
  const filteredMovie = [...movies].filter(movie => (
    movie.title.toLowerCase().includes(query.trim().toLowerCase())
    || movie.description.toLowerCase().includes(query.trim().toLowerCase())
  ));

  return filteredMovie;
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filteredMovies(moviesFromServer, { query });
  const filteredBy = (newQuery) => {
    setQuery(newQuery);
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

            <div
              className="control"
            >
              <input
                type="text"
                value={query}
                onChange={(event) => {
                  filteredBy(event.target.value);
                }}
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList
          query={query}
          visibleMovies={visibleMovies}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
