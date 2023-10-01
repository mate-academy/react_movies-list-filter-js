import { useState } from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

const prepareMovies = (movies, querry) => {
  let preparedMovies = [...movies];

  if (querry) {
    preparedMovies = preparedMovies.filter((item) => {
      const isInTitle = item.title.toLowerCase()
        .includes(querry.toLowerCase().trim());
      const isInDescription = item.description.toLowerCase()
        .includes(querry.toLowerCase().trim());

      return isInTitle || isInDescription;
    });
  }

  return preparedMovies;
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = prepareMovies(moviesFromServer, query);

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
                onChange={event => setQuery(event.target.value)}
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
