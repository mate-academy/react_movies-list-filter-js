import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const preparedMoviesList = (movies, quary) => {
  let preparedMovies = [...moviesFromServer];
  const quaryNormalized = quary.toLowerCase().trim();

  if (quary) {
    preparedMovies = preparedMovies.filter(movie => movie
      .title.toLowerCase().includes(quaryNormalized)
      || movie.description.toLowerCase().includes(quaryNormalized));
  }

  return preparedMovies;
};

export const App = () => {
  const [quary, setQuary] = useState('');
  const visibleMovies = preparedMoviesList(moviesFromServer, quary);

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
                onChange={(event) => {
                  setQuary(event.currentTarget.value);
                }}
                value={quary}
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
