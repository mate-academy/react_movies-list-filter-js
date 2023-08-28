import { useState } from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieSearchBar } from './components/MovieSearchBar';
import { MoviesList } from './components/MoviesList';
import { SideBar } from './components/SideBar';

function filterMoviesByQuery(movies, query) {
  const queryToLowerCase = query.trim().toLowerCase();

  return movies.filter(({ title, description }) => {
    const titleInLowerCase = title.toLowerCase();
    const descriptionInLowerCase = description.toLowerCase();

    return titleInLowerCase.includes(queryToLowerCase)
      || descriptionInLowerCase.includes(queryToLowerCase);
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const filteredMovies = filterMoviesByQuery(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <MovieSearchBar filterBy={setQuery} />
        <MoviesList movies={filteredMovies} />
      </div>

      <SideBar />
    </div>
  );
};
