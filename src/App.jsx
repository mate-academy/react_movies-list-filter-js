import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function movieSearch(filmList, value) {
  const newValue = value.toLowerCase().trim();
  
  return filmList.filter(
    film => (film.title && film.title.toLowerCase().includes(newValue))
      ||(film.description &&film.description.toLowerCase().includes(newValue))
  );
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = movieSearch(moviesFromServer, query);

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
                onChange={even => {
                  setQuery(even.currentTarget.value);
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
