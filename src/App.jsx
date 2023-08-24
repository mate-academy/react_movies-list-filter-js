import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function stringTitleDescription(str, substr) {
  return str.toLowerCase().includes(substr.toLowerCase().trim());
}

function preparedToFilter(movies, query) {
  const copyMovies = movies.filter((movie) => {
    const { title, description } = movie;

    return stringTitleDescription(title, query)
      || stringTitleDescription(description, query);
  });

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
