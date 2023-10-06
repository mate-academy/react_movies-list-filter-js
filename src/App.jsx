import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (event) => {
    setQuery(event.target.value.trim());
  };

  const visibleMovies = moviesFromServer.filter((movie) => {
    const lowerCaseQuery = query.toLowerCase().trim();
    const lowerCaseTitle = movie.title.toLowerCase();
    const lowerCaseDescription = movie.description.toLowerCase();

    return (
      lowerCaseTitle.includes(lowerCaseQuery)
      || lowerCaseDescription.includes(lowerCaseQuery)
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
                // On every change, save the input value into the `query`
                onChange={handleQueryChange}
              />
            </div>
          </div>
        </div>

        {/* Pass the filtered movies to MoviesList */}
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
