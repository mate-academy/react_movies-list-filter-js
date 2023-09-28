import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies, query) {
  let preparedMovies = [...movies];

  if (query) {
    const queryEdited = query.trim();

    // if (queryEdited.startsWith(' ')) {
    //   queryEdited = queryEdited.slice(1);
    // }

    // if (queryEdited.endsWith(' ')) {
    //   queryEdited = queryEdited.slice(0, -1);
    // }

    const lowerCaseQuery = queryEdited.toLowerCase();

    preparedMovies = movies.filter(({ title, description }) => (
      title.toLowerCase().includes(lowerCaseQuery)
      || description.toLowerCase().includes(lowerCaseQuery)
    ));
  }

  return preparedMovies;
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
                onChange={e => setQuery(e.target.value)}
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
