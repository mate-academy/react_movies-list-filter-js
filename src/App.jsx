import { useState } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { Page } from './components/Page/Page';

// function findQuery(string, query) {
//   return string.toLowerCase().trim().includes(query);
// }

function getPreparedMovies(movies, { query }) {
  let preparedMovies = [...movies];

  const preparedQuery = query.trim().toLowerCase();

  // if (query) {
  //   preparedMovies
  //   = preparedMovies.filter(movie => findQuery(movie.title, query)
  //   || findQuery(movie.description, query));
  // }
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
