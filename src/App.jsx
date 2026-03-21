import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const cleaningString = str => {
  const cleanStr = str.trim();

  return cleanStr ? cleanStr.toLowerCase() : '';
};

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = moviesFromServer.filter(movie => {
    const cleanTitle = cleaningString(movie.title);
    const cleanDescription = cleaningString(movie.description);
    const cleanQuery = cleaningString(query);

    return (
      cleanTitle.includes(cleanQuery) || cleanDescription.includes(cleanQuery)
    );
  });

  const handleChange = event => {
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
                value={query}
                onChange={handleChange}
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
