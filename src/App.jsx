import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

// function filterMovies(allMovies, query) {
//   const copyQuery = query.toLowerCase();

//   allMovies.filter(movie => (
//     movie.title.toLowerCase().includes(copyQuery)
//     || movie.description.toLowerCase().includes(copyQuery)));
// }

export const App = () => {
  const [query, setQuery] = useState('');
  const copyQuery = query.toLowerCase();

  const visibleMovies = moviesFromServer.filter(movie => (
    movie.title.toLowerCase().includes(copyQuery)
    || movie.description.toLowerCase().includes(copyQuery)));

  // const visibleMovies = filterMovies(moviesFromServer, query);

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
                query={query}
                onChange={(event) => {
                  setQuery(event.target.value.trim());
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

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
