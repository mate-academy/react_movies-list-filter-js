import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const handleFilter = (data, query) => {
  const filteredData = data.filter((el) => {
    const title = el.title.toLowerCase();
    const description = el.description.toLowerCase();
    const filterQuery = query.trim().toLowerCase();

    return title.includes(filterQuery) || description.includes(filterQuery);
  });

  return filteredData;
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = handleFilter(moviesFromServer, query);

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
                onChange={e => setQuery(e.target.value)}
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
  )
};
