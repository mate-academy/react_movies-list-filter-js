import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getFilteredMovies = (array, query) => {
  let copyMovies = [...array];

  if (query) {
    copyMovies = copyMovies.filter(
      movie => movie.title.toLowerCase().includes(query.toLowerCase().trim())
      || movie.description.toLowerCase().includes(query.toLowerCase().trim()),
    );
  }

  return copyMovies;
};

export const App = () => {
  const [queryField, setQueryFiled] = useState('');

  const filteredMovies = getFilteredMovies(moviesFromServer, queryField);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              htmlFor="search-query"
              className="label"
            >
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={e => setQueryFiled(e.target.value)}
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
