import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

// - On every change save the input value into the `query`;
// - create a `visibleMovies` variable containing filtered movies;
// - check if `movie.title` or `movie.description` contains `query`;
// - ignore leading and trailing spaces;
// - search should be case insensitive (`Inception` can be found by entering `inc` or `Inc` or even `iNC`).

function getVisibleMovies(movies, query) {
  if (!query) {
    return movies;
  }

  const fixedQuery = query.trim().toLowerCase();
  const visibleMovies = movies.filter(({ title, description }) => {
    const isTitleMatch = title.toLowerCase().includes(fixedQuery);
    const isDescriptionMatch = description.toLowerCase().includes(fixedQuery);

    return isTitleMatch || isDescriptionMatch;
  });

  return visibleMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getVisibleMovies(moviesFromServer, query);

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

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
