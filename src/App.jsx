import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Field } from './components/Field/Field';

function filterMovies(movies, query) {
  return movies.filter((movie) => {
    const titleToLower = movie.title.toLowerCase();
    const descriptionToLower = movie.description.toLowerCase();
    const querySpace = query.trim().toLowerCase();

    return (
      titleToLower.includes(querySpace)
       || descriptionToLower.includes(querySpace)
    );
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <Field
          filterBy={setQuery}
          query={query}
        />

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
