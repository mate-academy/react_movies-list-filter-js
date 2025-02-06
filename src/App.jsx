import './App.scss';
// import { queries } from '@testing-library/react';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  function getvisibleMovies(movies, { query }) {
    let preparedmovies = [...movies];

    const lowerQuery = query.toLowerCase().trim();

    preparedmovies = preparedmovies.filter(movie => {
      const title = movie.title.toLowerCase();
      const description = movie.description.toLowerCase();

      return title.includes(lowerQuery) || description.includes(lowerQuery);
    });

    return preparedmovies;
  }

  const [query, setQuery] = useState('');
  const visibleMovies = getvisibleMovies(moviesFromServer, { query });

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
                onChange={e => {
                  setQuery(e.target.value);
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
