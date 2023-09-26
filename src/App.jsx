import { useState } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { Page } from './components/Page/Page';

function getPreparedMovies(movies, { query }) {
  let preparedMovies = [...movies];

  const preparedQuery = query.trim().toLowerCase();

  if (preparedQuery) {
    preparedMovies
    = preparedMovies.filter(movie => movie.title.toLowerCase()
        .includes(preparedQuery)
    || movie.description.toLowerCase().includes(preparedQuery));
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getPreparedMovies(moviesFromServer, { query });

  return (
    <Page
      visibleMovies={visibleMovies}
      filterBy={(value) => {
        setQuery(value);
      }}
    />
  );
};
