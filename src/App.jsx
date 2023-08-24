import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies, { query }) {
  let preparedMovies = [...movies];

  if (query) {
    const trimtedQuery = query.toLowerCase().trim();

    preparedMovies = preparedMovies.filter(({ title, description }) => {
      const lowerCaseTitle = title.toLowerCase();
      const lowerCaseDescription = description.toLowerCase();

      return lowerCaseTitle.includes(trimtedQuery)
      || lowerCaseDescription.includes(trimtedQuery);
    });
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, { query });

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
                value={query}
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={visibleMovies}
          filterBy={newQuery => setQuery(newQuery)}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
