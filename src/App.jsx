import { useMemo, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const visibleMovies = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return moviesFromServer;
    }

    return moviesFromServer.filter(movie => {
      const titleMatch = movie.title.toLowerCase().includes(normalizedQuery);
      const descriptionMatch = movie.description
        .toLowerCase()
        .includes(normalizedQuery);

      return titleMatch || descriptionMatch;
    });
  }, [searchQuery]);

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
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
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
