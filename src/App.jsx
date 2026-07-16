import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function tofilter(list, query) {
  const cleanquery = query.trim().toLowerCase();

  if (!cleanquery) {
    return list;
  }

  return list.filter(film => {
    const title = film.title.trim().toLowerCase().includes(cleanquery);

    const description = (film.description || '')
      .toLowerCase()
      .includes(cleanquery);

    return title || description;
  });
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = tofilter(moviesFromServer, query);

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
                onChange={event => {
                  setQuery(event.currentTarget.value);
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
