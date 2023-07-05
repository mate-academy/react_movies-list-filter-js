import { useState } from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { Header } from './components/Header/Header';

function getPrepareMovie(movies, { query }) {
  if (query) {
    return movies
      .filter(movie => movie.description.toLowerCase().includes(query)
      || movie.title.toLowerCase().includes(query));
  }

  return movies;
}

export const App = () => {
  const [query, setQurey] = useState('');

  const visibleMovies = getPrepareMovie(
    moviesFromServer,
    { query },
  );

  return (
    <div className="page">
      <div className="page-content">
        <Header
          filterBy={(newQuery) => {
            setQurey(newQuery);
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
