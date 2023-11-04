import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  const handleChangeMovies = (event) => {
    const query = event.target.value.trim().toLowerCase();

    if (query === '') {
      setVisibleMovies(moviesFromServer);
    } else {
      setVisibleMovies(() => (
        filterMoviesList(query, moviesFromServer)
      ));
    }
  };

  const filterMoviesList = (value, moviesList) => (
    moviesList.filter((movie) => {
      const title = movie.title.toLowerCase();
      const description = movie.description.toLowerCase();

      if (title.includes(value)
       || description.includes(value)) {
        return movie;
      }

      return null;
    })
  );

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
                onChange={handleChangeMovies}
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
