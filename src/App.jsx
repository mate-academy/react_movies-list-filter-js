import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [condition, setCondition] = useState('');
  const visibleMovies = getVisibleMovies(moviesFromServer, condition);

  function getVisibleMovies(movies, query) {
    let changedMovies = [...movies];

    if (query) {
      changedMovies = changedMovies.filter(movie =>
        // eslint-disable-next-line implicit-arrow-linebreak
        movie.title.toLowerCase().includes(query.toLowerCase().trim())
        // eslint-disable-next-line max-len
        || movie.description.toLowerCase().includes(query.toLowerCase().trim()));
    }

    return changedMovies;
  }

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
                onChange={event => setCondition(event.target.value)}
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
