import './App.scss';
import { useState, useMemo } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const visibleMovies = useMemo(() => {
    let result = moviesFromServer;

    if (searchQuery.length) {
      result = result.filter((movie) => {
        const title = movie.title.toLowerCase();
        const description = movie.description.toLowerCase();
        const query = searchQuery.trim().toLowerCase();

        return title.includes(query) || description.includes(query);
      });
    }

    return result;
  }, [searchQuery.length]);

  function handleSearchQuery(event) {
    setSearchQuery(event.target.value);
  }

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
                value={searchQuery}
                onChange={handleSearchQuery}
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
