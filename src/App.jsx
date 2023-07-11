import './App.scss';
import { useMemo, useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const isFiltered = text => text.toLowerCase().includes(query.toLowerCase());

  const visibleMovies = useMemo(() => moviesFromServer.filter(movie => (
    isFiltered(movie.title) || isFiltered(movie.description)
  )), [moviesFromServer, query]);

  const trimmedInput = (e) => {
    setQuery(e.currentTarget.value.trim());
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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={trimmedInput}
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
