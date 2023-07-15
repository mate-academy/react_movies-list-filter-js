import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getNormalizedTExt(text, query) {
  return (text
    .toLowerCase()
    .includes(query.trim().toLowerCase())
  );
}

const getFilterFilms = (movies, query) => {
  if (query) {
    return movies.filter(movie => (getNormalizedTExt(
      movie.description, query,
    ) || getNormalizedTExt(movie.title, query)
    ));
  }

  return movies;
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getFilterFilms(moviesFromServer, query);

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
                onChange={(event) => {
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

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
