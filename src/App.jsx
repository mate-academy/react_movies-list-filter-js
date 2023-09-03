import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import { Header } from './components/Header';
import moviesFromServer from './api/movies.json';

function prepareString(string) {
  return string.toLowerCase().trim();
}

function getPreparedMovies(movies, query) {
  if (!query) {
    return movies;
  }

  return movies.filter(
    movie => prepareString(movie.title).includes(prepareString(query))
    || prepareString(movie.description).includes(prepareString(query)),
  );
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getPreparedMovies(moviesFromServer, query);

  const filterByHandler = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div className="page">
      <div className="page-content">
        <Header
          filterBy={filterByHandler}
        />

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
