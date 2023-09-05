import { useState } from 'react';

import moviesFromServer from './api/movies.json';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchMovie } from './components/SearchMovie/SearchMovie';

function getPreparedMovies(movies, query) {
  if (query === '') {
    return movies;
  }

  return (
    movies
      .filter(movie => (
        movie.title.toLowerCase().includes(normalizationQuery(query))
        || movie.description.toLowerCase().includes(normalizationQuery(query))
      ))
  );
}

const normalizationQuery = query => query.trim().toLowerCase();

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <SearchMovie
            query={query}
            filterBy={(newQuery) => {
              setQuery(newQuery);
            }}
          />
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
