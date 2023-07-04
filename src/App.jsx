import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilteredData(dataFromServer, query) {
  const filteredData = [...dataFromServer].filter((point) => {
    const title = point.title.toLowerCase();
    const description = point.description.toLowerCase();
    const queryForSearch = query.trim().toLowerCase();

    if (title.includes(queryForSearch)
      || description.includes(queryForSearch)) {
      return true;
    }

    return false;
  });

  return filteredData;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovie] = useState(moviesFromServer);

  function getVisibleMovie(newQuery) {
    return getFilteredData(moviesFromServer, newQuery);
  }

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
                onChange={(event) => {
                  const newQuery = event.target.value;

                  setQuery(newQuery);
                  setVisibleMovie(getVisibleMovie(newQuery));
                }}
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
  );
};
