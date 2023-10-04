import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import { MovieSearch } from './components/MovieSearch';
import moviesFromServer from './api/movies.json';
import './App.scss';

const getPreparedMovies = (movies, query) => {
  if (query) {
    return movies
      .filter(movie => (
        movie.title.toLowerCase().includes(query.toLowerCase().trim())
        || movie.description.toLowerCase().includes(query.toLowerCase().trim())
      ));
  }

  return movies;
};

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <MovieSearch
          query={query}
          filterBy={setQuery}
        />
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
