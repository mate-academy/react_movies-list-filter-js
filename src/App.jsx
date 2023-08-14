import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getVisibleMovies(movies, query) {
  return movies
    .filter(movie => checkTitle(movie, query)
    || checkDescription(movie, query));
}

const checkTitle = (movie, query) => {
  if (movie.title.toLowerCase()
    .includes(query.trim().toLowerCase())) {
    return true;
  }

  return false;
};

const checkDescription = (movie, query) => {
  if (movie.description.toLowerCase()
    .includes(query.trim().toLowerCase())) {
    return true;
  }

  return false;
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getVisibleMovies(moviesFromServer, query);

  const onChange = event => setQuery(event.target.value);

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
                onChange={onChange}
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
