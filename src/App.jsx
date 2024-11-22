import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [search, setSearch] = useState('');
  const defaultMovies = [...moviesFromServer];
  const [visibleMovies, setVisibleMovies] = useState(defaultMovies);

  function filterMovies(allMovies, query) {
    const newMovies = allMovies.filter(
      movie =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.description.toLowerCase().includes(query.toLowerCase()),
    );

    setVisibleMovies(newMovies);
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
                value={search}
                onChange={event => {
                  const query = event.currentTarget.value;

                  setSearch(query);
                  filterMovies(defaultMovies, query.trim());
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
