import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movieList, query) {
  let movies = [...movieList];
  const cleanQuery = query.trim().toLowerCase();

  if (query) {
    movies = [...movieList].filter(movie => {
      const movieTitle = movie.title.toLowerCase();
      const movieDescription = movie.description.toLowerCase();

      return (
        movieTitle.includes(cleanQuery) || movieDescription.includes(cleanQuery)
      );
    });
  }

  return movies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, query);

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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={event => {
                  setQuery(event.currentTarget.value);
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
