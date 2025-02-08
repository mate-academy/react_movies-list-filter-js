import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');
  let visibleMovies;

  if (query) {
    visibleMovies = moviesFromServer.filter((movie) => {
      
      const mTitle = movie.title.includes(query) || movie.title.toLowerCase().trim().includes(query.toLowerCase().trim());
      const mDesc = movie.description.includes(query) || movie.description.toLowerCase().trim().includes(query.toLowerCase().trim());
      return mTitle || mDesc;
    });
  } else {
    visibleMovies = moviesFromServer;
  }
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
                onChange={e => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
}
