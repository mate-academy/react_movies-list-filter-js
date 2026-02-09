import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movieList, query) {
  let visibleList = movieList;

  if (query) {
    const queryCleaned = query.trim();

    visibleList = visibleList.filter(movie => {
      const checkTitle = movie.title
        .toLowerCase()
        .includes(queryCleaned.toLowerCase());
      const checkSubtitle = movie.description
        .toLowerCase()
        .includes(queryCleaned.toLowerCase());

      const result = checkTitle || checkSubtitle;

      return result;
    });
  }

  return visibleList;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, query);

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
                value={query}
                onChange={event => {
                  setQuery(event.currentTarget.value);
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
