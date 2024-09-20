import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const normilized = value => {
  return value.toLowerCase().trim();
};

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = moviesFromServer.filter(movie => {
    const normilizedTitle = normilized(movie.title);
    const normilizedDescription = normilized(movie.description);
    const normilizedQuery = normilized(query);

    return (
      normilizedTitle.includes(normilizedQuery) ||
      normilizedDescription.includes(normilizedQuery)
    );
  });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
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
                onChange={event => setQuery(event.target.value.trimStart())}
              />
            </div>
          </div>
        </div>

        {visibleMovies.length > 0 ? (
          <MoviesList movies={visibleMovies} />
        ) : (
          <p style={{ textAlign: 'center' }}>
            Sorry, the movie you are looking for was not found.
          </p>
        )}
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
