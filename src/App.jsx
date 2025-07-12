import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import Filter from './components/Filter/Filter';

function getPreparedMovies(movies, query) {
  if (!query) {
    return movies;
  }

  const lowerCaseQuery = query.toLowerCase().trim();

  return movies.filter(movie => {
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();

    return (
      title.includes(lowerCaseQuery) || description.includes(lowerCaseQuery)
    );
  });
}

export const App = () => {
  const [query, setQuery] = React.useState('');
  const visiblemovies = getPreparedMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <Filter query={query} setQuery={setQuery} />

        <MoviesList movies={visiblemovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
