import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedData(movies, { search }) {
  let preparedData = [...movies];

  if (search) {
    preparedData = preparedData.filter(el => {
      const formatSearch = search.toLowerCase().trim();

      return (
        el.title.toLowerCase().includes(formatSearch) ||
        el.description.toLowerCase().includes(formatSearch)
      );
    });
  }

  return preparedData;
}

export const App = () => {
  const [search, setSearch] = useState('');
  const newData = getPreparedData(moviesFromServer, { search });

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
                value={search}
                onChange={event => {
                  setSearch(event.currentTarget.value);
                }}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={newData} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
