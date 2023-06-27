import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import './App.scss';

export const App = () => {
  const [query, setQuery] = useState('');

  const changeQueryHandler = (event) => {
    const newQuery = event.target.value;

    setQuery(newQuery);
  };

  const isTextIncludesQuery = (text, currQuery) => {
    const lowerText = text.toLowerCase();
    const lowerQuery = currQuery
      .trim()
      .toLowerCase();

    return lowerText.includes(lowerQuery);
  };

  const visibleMovies = moviesFromServer.filter((movie) => {
    const { title, description } = movie;

    return (
      isTextIncludesQuery(title, query)
        || isTextIncludesQuery(description, query)
    );
  });

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
                value={query}
                onChange={changeQueryHandler}
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
