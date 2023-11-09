import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedGoods(movies, { query }) {
  let preparedGoods = [...movies];

  if (query) {
    const lowercaseQuery = query.toLowerCase();

    preparedGoods = preparedGoods.filter(movie => movie.title
      .toLowerCase()
      .includes(lowercaseQuery)
      || movie.description
        .toLowerCase()
        .includes(lowercaseQuery));
  }

  return preparedGoods;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getPreparedGoods(moviesFromServer, { query });

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
                value={query}
                onChange={(event) => {
                  setQuery(event.currentTarget.value);
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

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
