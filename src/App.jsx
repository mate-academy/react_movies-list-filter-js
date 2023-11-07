import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const [filteredMovies, setfilteredMovies] = useState([]);

  const filterBy = (searchQuery) => {
    const searchTerms = searchQuery.trim().toLowerCase().split(/\s+/);

    const filtered = moviesFromServer.filter((movie) => {
      const title = movie.title.toLowerCase();
      const description = movie.description.toLowerCase();

      return searchTerms.every(term => title.includes(term)
        || description.includes(term));
    });

    setQuery(searchQuery);
    setfilteredMovies(filtered);
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
                onChange={(event) => {
                  filterBy(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={query ? filteredMovies : moviesFromServer}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
