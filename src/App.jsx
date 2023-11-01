import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function prepareMovies(moviesList, query) {
  const correctQuery = query.toLowerCase().trim();

  const movies = [...moviesList].filter((movie) => {
    const correctTitle = movie.title.toLowerCase();
    const correctDescription = movie.description.toLowerCase();

    return correctTitle.includes(correctQuery)
      || correctDescription.includes(correctQuery);
  });

  return movies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const preparedMovies = prepareMovies(moviesFromServer, query);

  return (
    <>
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
                  onChange={(event) => {
                    setQuery(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <MoviesList
            movies={preparedMovies}

          />
        </div>

        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    </>
  );
};
