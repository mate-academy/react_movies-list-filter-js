import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function preparedToFilter(movies, query) {
  let copyMovies = [...movies];

  if (query) {
    copyMovies = copyMovies.filter((movie) => {
      const { title, description } = movie;

      return title.toLowerCase().includes(query.toLowerCase().trim())
        || description.toLowerCase().includes(query.toLowerCase().trim());
    });
  }

  return copyMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const filterMovies = preparedToFilter(moviesFromServer, query);

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
                onChange={(event) => {
                  setQuery(event.currentTarget.value);
                }}
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filterMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
