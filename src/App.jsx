import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies, query) {
  if (query) {
    const trimQuery = query.trim().toLowerCase();

    return movies.filter(movie => {
      const MovieTitle = movie.title.toLowerCase();
      const MovieDescription = movie.description.toLowerCase();

      return (
        MovieTitle.includes(trimQuery) || MovieDescription.includes(trimQuery)
      );
    });
  }

  return movies;
}

export const App = () => {
  const [query, setGuery] = useState('');

  const visiableMovies = getPreparedMovies(moviesFromServer, query);

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
                value={query}
                onChange={e => setGuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visiableMovies} />
      </div>
      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
