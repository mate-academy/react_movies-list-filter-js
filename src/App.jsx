import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getMovie(movies, query) {
  const searchQuery = query.trim().toLowerCase();


  return movies.filter(el => el.title.toLowerCase().includes(searchQuery)
    || el.description.toLowerCase().includes(searchQuery));
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getMovie(moviesFromServer, query);
  const searchQuery = event => setQuery(event.target.value);

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
                onChange={searchQuery}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar" data-cy="Sidebar">
        Sidebar will be here
      </div>
    </div>
  );
};
