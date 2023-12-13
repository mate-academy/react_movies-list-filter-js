import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilterMovies(movies, query) {
  let filterMovies = [...movies];

  if (query) {
    filterMovies = filterMovies.filter((movie) => {
      const movieTitle = movie.title.toLowerCase();
      const movieDescription = movie.description.toLowerCase();
      const processedQuery = query.toLowerCase().trim();

      return movieTitle.includes(processedQuery)
        || movieDescription.includes(processedQuery);
    });
  }

  return filterMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getFilterMovies(moviesFromServer, query);

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
                onChange={event => setQuery(event.target.value)}
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

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
