import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

// const filterMovies = (movies, query) => {
//   if (!query) {
//     return movies;
//   }

//   return movies.filter((movie) => {
//     const preparedQuery = query.toLowerCase();
//     const prepareTitle = movie.title.toLowerCase();

//     return prepareTitle.icludes(preparedQuery);
//   });
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
                value={query}
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
