import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPrepearedList(query, moviesList) {
  const copyList = [...moviesList];

  if (query) {
    const prepearedQuery = query.trim().toLowerCase();

    return copyList.filter(
      movie =>
        movie.title.trim().toLowerCase().includes(prepearedQuery) ||
        movie.description.trim().toLowerCase().includes(prepearedQuery),
    );
  }

  return copyList;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getPrepearedList(query, moviesFromServer);

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
