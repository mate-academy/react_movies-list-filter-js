import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filterMovies = (query, setVisibleMovies) => {
  const sanitizedQuery = query.trim().toLowerCase();

  setVisibleMovies(moviesFromServer.filter((movie) => {
    const lowercasedTitle = movie.title.toLowerCase();
    const lowercasedDescription = movie.description.toLowerCase();

    return lowercasedTitle.includes(sanitizedQuery)
      || lowercasedDescription.includes(sanitizedQuery);
  }));
};

export const App = () => {
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

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
                onChange={(event) => {
                  filterMovies(event.target.value, setVisibleMovies);
                }}
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
