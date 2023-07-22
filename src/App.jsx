import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovie(goods, { query }) {
  let copyGoods = [...goods];

  if (query) {
    const lowercaseQuery = query.toLowerCase().trim();

    copyGoods = copyGoods.filter(movie => (
      movie.title.toLowerCase().includes(lowercaseQuery)
      || movie.description.toLowerCase().includes(lowercaseQuery)
    ));
  }

  return copyGoods;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const filteredMovies = filterMovie(moviesFromServer, { query });

  const filterBy = (newQuery) => {
    setQuery(newQuery);
  };

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
                onChange={(event) => {
                  filterBy(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
