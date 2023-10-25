/* eslint-disable max-len */
import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SortField } from './components/SortField';

function getPrepearedMovies(movies, { query }) {
  let sortingMovies = [...movies];

  sortingMovies
    // eslint-disable-next-line max-len
    = sortingMovies.filter(movie => movie.title.trim().toLowerCase().includes(query.trim().toLowerCase())
      || movie.description.trim().toLowerCase().includes(query.trim().toLowerCase()));

  return sortingMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getPrepearedMovies(
    moviesFromServer,
    { query },
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

            <SortField
              filterBy={(newQuery) => {
                setQuery(newQuery);
              }}
            />
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
