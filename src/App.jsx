import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMoves(moviesFromPage, query) {
  if (query) {
    const preparedQuery = query.toLowerCase().trim();

    return moviesFromPage.filter((movie) => {
      const lowerTitle = movie.title.toLowerCase();
      const lowerDescription = movie.description.toLowerCase();

      return (lowerTitle.includes(preparedQuery)
      || lowerDescription.includes(preparedQuery));
    });
  }

  return moviesFromPage;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterMoves(moviesFromServer, query);

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
                onChange={event => setQuery(event.target.value)}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
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
