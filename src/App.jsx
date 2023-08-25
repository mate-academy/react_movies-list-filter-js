import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMoviesList(movies, { query }) {
  let filteredMovies = [...movies];

  if (query) {
    filteredMovies = filteredMovies.filter(
      movie => movie.title.toLowerCase().includes(query.toLowerCase().trim())
        || movie.description.toLowerCase().includes(query.toLowerCase().trim()),
    );
  }

  return filteredMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const sortBy = newQuery => setQuery(newQuery);
  const visiableMovies = getPreparedMoviesList(moviesFromServer, { query });

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
                onChange={(event) => {
                  sortBy(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visiableMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
