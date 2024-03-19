import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovieList(list, { query }) {
  let preparedMovieList = [...list];

  if (query) {
    preparedMovieList = preparedMovieList.filter(movie => {
      // eslint-disable-next-line prettier/prettier
      return (
        movie.title.toLocaleLowerCase().includes(query) ||
        // eslint-disable-next-line prettier/prettier
        movie.description.toLocaleLowerCase().includes(query)
      );
    });
  }

  return preparedMovieList;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovieList = getPreparedMovieList(moviesFromServer, { query });

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
                  setQuery(event.target.value.toLocaleLowerCase().trim());
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovieList} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
