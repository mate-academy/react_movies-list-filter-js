import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Field } from './components/Field';

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = moviesFromServer.filter(movie => {
    const movieTitle = movie.title.toLowerCase();
    const movieDescription = movie.description.toLowerCase();
    const searchQuery = query.trim().toLowerCase();

    return (
      movieTitle.includes(searchQuery) || movieDescription.includes(searchQuery)
    );
  });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <Field
            query={query}
            filterBy={newQuery => {
              setQuery(newQuery);
            }}
          />
        </div>
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
