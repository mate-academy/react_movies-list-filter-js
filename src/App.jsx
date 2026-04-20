import { useState, useMemo } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filterMoviesByQuery = (filterQuery, movies) => {
  if (filterQuery === '') {
    return movies;
  }

  const query = filterQuery.toLowerCase().trim();

  return movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(query) ||
      movie.description.toLowerCase().includes(query)
    );
  });
}

export const App = () => {
  const [filterQuery, setFilterQuery] = useState('');

  const visibleMovies = useMemo(() => {
    return filterMoviesByQuery(filterQuery, moviesFromServer);
  }, [filterQuery]);

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
                value={filterQuery}
                onChange={e => {
                  setFilterQuery(e.target.value);
                }}
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
