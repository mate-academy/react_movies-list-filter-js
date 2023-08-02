import { useState } from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';

import { MoviesList } from './components/MoviesList';
import { SearchHeader } from './components/SearchHeader';

function getPreparedMovies(movies, query) {
  const preparedMovies = [...movies];

  if (!query) {
    return movies;
  }

  const prompt = query.toLowerCase().trim();

  return preparedMovies.filter(
    movie => movie.title.toLowerCase().includes(prompt)
    || movie.description.toLowerCase().includes(prompt),
  );
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <SearchHeader filterBy={setQuery} />
        </div>
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
