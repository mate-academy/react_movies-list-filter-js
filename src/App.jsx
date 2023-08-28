import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import { Header } from './components/Header';
import moviesFromServer from './api/movies.json';

function prepareString(string) {
  return string.toLowerCase().trim();
}

function getPreparedMovies(movies, { query }) {
  let preparedMovies = [...movies];

  if (query) {
    preparedMovies = preparedMovies.filter(
      movie => prepareString(movie.title).includes(prepareString(query))
        || prepareString(movie.description).includes(prepareString(query)),
    );
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getPreparedMovies(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="page-content">
        <Header
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
