import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const isContainFilterQuery = (key, query) =>
  key.toLowerCase().includes(query.toLowerCase().trim());

function getFilteredGoodsList(movieList, query) {
  const movieListCopy = [...movieList];

  if (query) {
    return movieListCopy.filter(movie => {
      const { title, description } = movie;

      return (
        isContainFilterQuery(title, query) ||
        isContainFilterQuery(description, query)
      );
    });
  }

  return movieListCopy;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getFilteredGoodsList(moviesFromServer, query);

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
                onChange={event => {
                  setQuery(event.target.value);
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
