import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

// const getSortedMovies = (arraOfMovies, query) => {
//   const lowerQuery = query.toLowerCase();
//   const filteredMovies = arraOfMovies.filter((movie) => {
//     const { title, description } = movie;

//     return title.toLowerCase().includes(lowerQuery)
//   || description.toLowerCase().includes(lowerQuery);
//   });

//   return filteredMovies;
// };

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = moviesFromServer.filter((movie) => {
    const lowerQuery = query.toLowerCase().trim();
    const { title, description } = movie;

    return title.toLowerCase().includes(lowerQuery)
  || description.toLowerCase().includes(lowerQuery);
  });

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
