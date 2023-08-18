import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterFilmFunction(serverFilms, query) {
  const trimmedQuery = query.trim().toLowerCase();

  return serverFilms.filter(film => {
    return (
      film.description.toLowerCase().includes(trimmedQuery) ||
      film.title.toLowerCase().includes(trimmedQuery)
    );
  });
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = filterFilmFunction(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label
              htmlFor="search-query"
              className="label"
            >
              Search movie
            </label>

            <div className="control">
              <input
                value={query}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={event => setQuery(event.target.value)}
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
