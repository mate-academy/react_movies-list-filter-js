import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = query.trim();
  const v = visibleMovies;
  const m = moviesFromServer;

  let r1 = [];

  r1 = m.filter(x => x.title.toLowerCase().includes(v.toLowerCase()));

  let r2 = [];

  r2 = m.filter(x => x.description.toLowerCase().includes(v.toLowerCase()));

  const mergedArray = [
    ...new Map([...r1, ...r2].map(movie => [movie.imdbId, movie])).values(),
  ].sort((a, b) => a.title.localeCompare(b.title));

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
                  setQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={mergedArray} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
