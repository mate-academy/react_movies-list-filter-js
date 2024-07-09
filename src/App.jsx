import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filteredMovies = query => {
  const formatQuery = query.trim().toLowerCase();

  return moviesFromServer.filter(movie => {
    const movieTitle = movie.title.toLowerCase();
    const movieDesc = movie.description.toLowerCase();

    if (movieTitle.includes(formatQuery) || movieDesc.includes(formatQuery)) {
      return movie;
    }

    return null;
  });
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filteredMovies(query);

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
                onChange={event => {
                  setQuery(event.target.value);
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
