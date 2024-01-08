import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

function filter(movies, qerry) {
  let moviesCopy = [...movies];
  const qerryCleared = qerry.trim().toLowerCase();

  moviesCopy = moviesCopy.filter(
    movie => movie.title.toLowerCase().includes(qerryCleared)
    || movie.description.toLowerCase().includes(qerryCleared),
  );

  return moviesCopy;
}

export const App = () => {
  const [searchStr, setSearchStr] = useState('');
  const visibleMovies = filter(moviesFromServer, searchStr);

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
                onChange={event => setSearchStr(event.target.value)}
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
)};
