import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function movieFilter(moviesFun, queryFun) {
  let movies = [...moviesFun];

  if (queryFun) {
    movies = movies.filter(movie => {
      const movieQ = queryFun.trim().toLowerCase();
      const movieTitle = movie.title.toLowerCase();
      const movieDescription = movie.description.toLowerCase();

      return movieTitle.includes(movieQ) || movieDescription.includes(movieQ);
    });
  }

  return movies;
}

export const App = () => {
  const [query, setQuery] = useState('');

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
                onChange={event => {
                  setQuery(event.target.value);
                }}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>
        <MoviesList movies={movieFilter(moviesFromServer, query)} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
