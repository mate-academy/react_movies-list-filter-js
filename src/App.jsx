import './App.scss';
import { useState } from 'react';
import moviesFromServer from './api/movies.json';
import { Field } from './components/Field';
import { MoviesList } from './components/MoviesList';

function updateMovies(movies, query) {
  return movies.filter((movie) => {
    const titleToLowerCase = movie.title.toLowerCase();
    const descriptionToLowerCase = movie.description.toLowerCase();
    const queryTrimSpacesToLowerCase = query.trim().toLowerCase();

    return (
      titleToLowerCase.includes(queryTrimSpacesToLowerCase)
      || descriptionToLowerCase.includes(queryTrimSpacesToLowerCase)
    );
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = updateMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <Field
            filterBy={setQuery}
            query={query}
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
