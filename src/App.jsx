import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filtration(query, movies) {
  let copy = [...movies];

  if (query) {
    copy = copy.filter(item => {
      const description = item.description
        .toLowerCase()
        .includes(query.toLowerCase().trim());
      const title = item.title
        .toLowerCase()
        .includes(query.toLowerCase().trim());

      return description || title;
    });
  }

  return copy;
}

export const App = () => {
  const [query, setQuery] = useState(null);

  const visibleMovies = filtration(query, moviesFromServer);

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
                onChange={event => {
                  setQuery(event.target.value);
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
