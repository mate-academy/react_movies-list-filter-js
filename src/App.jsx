import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies, { query }) {
  let preparedMovies = [...movies];

  if (query) {
    preparedMovies = preparedMovies.filter(
      movie => (
        movie.title.toLowerCase().trim().includes(query)
        || movie.description.toLowerCase().trim().includes(query)
      ),
    );
  }

  return preparedMovies;
}

export const App = () => {
  const [searchField, setSearchField] = useState('');

  const visibleMovies = getPreparedMovies(
    moviesFromServer, { searchField },
  );

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
                onChange={(event) => {
                  setSearchField(event.currentTarget.value);
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

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
