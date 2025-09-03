import { useMemo, useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

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
  }, [query]);

  return (
    <div className='page'>
      <div className='page-content'>
        <div className='box'>
          <div className='field'>
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className='control'>
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
    </div>
  );
};
