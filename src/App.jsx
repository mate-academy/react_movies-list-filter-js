import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const preparedMovies = (movies, query) => {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return movies;
  }

  return movies.filter(({ title, description }) => {
    const lowerTitle = title.toLowerCase();
    const lowerDescription = description.toLowerCase();

    return (
      lowerTitle.includes(normalizedQuery) ||
      lowerDescription.includes(normalizedQuery)
    );
  });
};

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = preparedMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
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
