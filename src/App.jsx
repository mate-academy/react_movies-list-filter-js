import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getFilteredMovies = query => {
  const movies = [...moviesFromServer];

  if (!query) {
    return movies;
  }

  return movies.filter(
    movie =>
      movie.title.toLocaleLowerCase().includes(query) ||
      movie.description.toLocaleLowerCase().includes(query),
  );
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getFilteredMovies(query);

  const onQueryChange = e => {
    setQuery(e.target.value.toLocaleLowerCase().trim());
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
                onChange={onQueryChange}
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
