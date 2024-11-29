import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function prepairMovies(movies, query) {
  let moviesList = [...movies];

  if (query) {
    moviesList = moviesList.filter(
      movie =>
        movie.title.toLowerCase().includes(query.toLowerCase().trim()) ||
        movie.description.toLowerCase().includes(query.toLowerCase().trim()),
    );
  }

  return moviesList;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const [inputValue, setInputValue] = useState('');

  const visibleMovies = prepairMovies(moviesFromServer, query);

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
                value={inputValue}
                onChange={event => {
                  setInputValue(event.target.value);
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
