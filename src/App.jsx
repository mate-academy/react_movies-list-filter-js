import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies, { query }) {
  let preparedMovies = [...movies];

  if (query) {
    preparedMovies = preparedMovies.filter(movie => isIncludes(movie, query));
  }

  return preparedMovies;
}

function isIncludes(movie, query) {
  const title = movie.title.toLowerCase().includes(query);
  const description = movie.description.toLowerCase().includes(query);

  return title || description;
}

export const FilterFild = ({ FilterBy }) => (
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
            FilterBy(event.target.value);
          }}
        />
      </div>
    </div>
  </div>
);

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getPreparedMovies(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="page-content">
        <FilterFild
          FilterBy={newQuery => {
            setQuery(newQuery.trim().toLowerCase());
          }}
        />

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
