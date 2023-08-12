import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

let inputValue;

function callBackFilter(el) {
  const title = el.title.split(' ').join('').toLocaleLowerCase();
  const description = el.description.split(' ').join('').toLocaleLowerCase();

  return title.includes(inputValue) || description.includes(inputValue);
}

function filterMovies(query) {
  let movies;

  if (query) {
    movies = [...moviesFromServer].filter(callBackFilter);
  } else {
    movies = [...moviesFromServer];
  }

  return movies;
}

export const App = () => {
  const [query, setValue] = useState('');
  const visibleMovies = filterMovies(query);
  const setValueInput = (target) => {
    inputValue = target.currentTarget.value.trim()
      .split(' ').join('').toLocaleLowerCase();

    setValue(inputValue);
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
                onChange={target => setValueInput(target)}

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
