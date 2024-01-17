import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);
  const [query, setQuery] = useState('');

  const filterMovies = (innerQuery) => {
    if (innerQuery) {
      const trimmedQuery = innerQuery.trim().toLowerCase();

      const filteredMovies = moviesFromServer.filter((movie) => {
        const lowerCaseTitle = movie.title.trim().toLowerCase();
        const lowerCaseDescription = movie.description.trim().toLowerCase();

        return (
          lowerCaseTitle.includes(trimmedQuery)
          || lowerCaseDescription.includes(trimmedQuery)
        );
      });

      setVisibleMovies(filteredMovies);
    } else {
      setVisibleMovies(moviesFromServer);
    }
  };

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
                value={query}
                onChange={(event) => {
                  setQuery(event.currentTarget.value);
                  filterMovies(event.currentTarget.value);
                }}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
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
