// import React from 'react';
import './App.scss';
import { useState } from 'react';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar/SearchBar';
// import { set } from 'cypress/types/lodash';

function getMovies(movies, { query }) {
  let filteredMovies = movies;

  if (query) {
    filteredMovies = movies.filter(
      movie => movie.title.toLowerCase().includes(query.trim().toLowerCase())
      || movie.description.toLowerCase().includes(query.trim().toLowerCase()),
    );
  }

  return filteredMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getMovies(
    moviesFromServer,
    { query },
  );

  return (
    <div className="page">
      <div className="page-content">
        <SearchBar
          filterBy={(newQuery) => {
            setQuery(newQuery);
          }}
        />

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
