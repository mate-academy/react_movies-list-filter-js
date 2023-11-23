import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [queryFilm, setQueryFilm] = useState('');

  const filterMovies = (movies, query) => {
    if (!query) {
      return movies;
    }

    const lowerCaseQuery = query.toLowerCase().trim();

    return movies.filter((movie) => {
      const lowerCaseTitle = movie.title.toLowerCase();
      const lowerCaseDescription = movie.description.toLowerCase();

      return (
        lowerCaseTitle.includes(lowerCaseQuery)
        || lowerCaseDescription.includes(lowerCaseQuery)
      );
    });
  };

  const visibleMovies = filterMovies(moviesFromServer, queryFilm);

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
                value={queryFilm}
                onChange={event => setQueryFilm(event.target.value)}
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
