import { useEffect, useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import './App.scss';

export const App = () => {
  const [visibleMovies, setVisibleItems] = useState(moviesFromServer);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (normalizedQuery.length) {
      const filtered = moviesFromServer.filter(
        movie =>
          movie.title.toLowerCase().includes(normalizedQuery) ||
          movie.description.toLowerCase().includes(normalizedQuery),
      );

      setVisibleItems(filtered);
    } else {
      setVisibleItems(moviesFromServer);
    }
  }, [query, moviesFromServer]);

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

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
