import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import { Header } from './components/Header';
import moviesFromServer from './api/movies.json';

function checkQuery(string, query) {
  const preparedString = string.toLowerCase().trim();
  const preparedQuery = query.toLowerCase().trim();

  return preparedString.includes(preparedQuery);
}

function getPreparedMovies(movies, query) {
  if (!query) {
    return movies;
  }

  return movies.filter(
    movie => checkQuery(movie.title, query)
    || checkQuery(movie.description, query),
  );
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getPreparedMovies(moviesFromServer, query);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="page">
      <div className="page-content">
        <Header inputChange={handleInputChange} />

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
