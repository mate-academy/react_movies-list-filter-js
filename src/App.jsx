import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filterMovies = (movies, query) => {
  return movies.filter(
    item =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query),
  );
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterMovies(moviesFromServer, query);

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
                onChange={changeEvent =>
                  setQuery(changeEvent.currentTarget.value.trim().toLowerCase())
                }
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
