import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilteredMovieList(moviesList, newCondition) {
  const newMoviesFromServer = [...moviesList];

  if (newCondition) {
    return newMoviesFromServer.filter(
      movie =>
        movie.title.toLowerCase().includes(newCondition.toLowerCase().trim()) ||
        movie.description
          .toLowerCase()
          .includes(newCondition.toLowerCase().trim()),
    );
  }

  return newMoviesFromServer;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const displayedFilms = getFilteredMovieList(moviesFromServer, query);

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
                onChange={event => setQuery(event.target.value)}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={displayedFilms} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
