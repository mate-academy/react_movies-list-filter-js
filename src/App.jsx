import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getNormalizedTExt(text, query) {
  const normalizedText = text.toLowerCase().includes(query);

  return normalizedText;
}

const getFilterFilms = (movies, query) => {
  let preparedMovies = [...movies];
  let newQuery = query;

  if (newQuery) {
    newQuery = newQuery.trim().toLowerCase();
    preparedMovies = preparedMovies.filter(movie => (getNormalizedTExt(
      movie.description, newQuery,
    ) || getNormalizedTExt(movie.title, newQuery)
    ));
  }

  return preparedMovies;
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
