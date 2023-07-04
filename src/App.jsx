import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilterMovie(movies, query) {
  const normalQuery = query.toLowerCase().trim();
  const filteredMovies = movies.filter((movie) => {
    const lowerTitle = movie.title.toLowerCase();
    const lowerDescription = movie.description.toLowerCase();

    return lowerTitle.includes(normalQuery)
    || lowerDescription.includes(normalQuery);
  });

  return filteredMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getFilterMovie(moviesFromServer, query);

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
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
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
