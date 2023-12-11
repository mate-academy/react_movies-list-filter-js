import './App.scss';
import { useState } from 'react';
import { Page } from './components/page';

import moviesFromServer from './api/movies.json';

const preperedMovieList = (allMovie, query) => {
  let preperedMovies = [...allMovie];

  if (query) {
    const lowerQuery = query.toLowerCase();

    preperedMovies = preperedMovies.filter(
      movie => movie.title.toLowerCase().includes(lowerQuery)
      || movie.description.toLowerCase().includes(lowerQuery),
    );
  }

  return preperedMovies;
};

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = preperedMovieList(moviesFromServer, query);

  return (
    <Page
      visibleMovies={visibleMovies}
      filterBy={(newQuery) => {
        setQuery(newQuery.trim());
      }}
    />
  );
};
