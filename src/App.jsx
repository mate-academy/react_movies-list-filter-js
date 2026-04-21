import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  function sortBy(movieList, query) {
    const normalizedQuery = query.trim().toLowerCase();

    return movieList.filter(movie => {
      const title = movie.title.toLowerCase();
      const description = movie.description.toLowerCase();

      return (
        title.includes(normalizedQuery) || description.includes(normalizedQuery)
      );
    });
  }

  const [querySort, setQuerySort] = useState('');
  const visibleList = sortBy(moviesFromServer, querySort);

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
                onChange={e => setQuerySort(e.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleList} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
