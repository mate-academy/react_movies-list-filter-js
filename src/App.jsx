import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

const searchFilm = (films, query) => {
  const preparedQuery = query.trim().toLowerCase();

  return [...films].filter(film => {
    return film.title.toLowerCase().includes(preparedQuery) || film.description.toLowerCase().includes(preparedQuery);
  });
}

export const App = () => {
const [query, setQuery] = useState('');
const visibleMovies = searchFilm(moviesFromServer, query);
  
  return <div className="page">
    <div className="page-content">
      <div className="box">
        <div className="field">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="search-query" className="label">
            Search movie
          </label>

          <div className="control">
            <input
              onChange={(event) => {
                setQuery(event.currentTarget.value);
              }}
              type="text"
              id="search-query"
              className="input"
              placeholder="Type search word"
              value={query}
            />
          </div>
        </div>
      </div>

      <MoviesList movies={visibleMovies} />
    </div>

    <div className="sidebar">Sidebar goes here</div>
  </div>
};
