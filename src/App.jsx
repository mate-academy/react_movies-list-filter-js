import './App.scss';
import { useState } from 'react';
import moviesFromServer from './api/movies.json';
import { Page } from './components/Page/Page';
import { MoviesList } from './components/MoviesList';

function getSortedMovies(movies, query) {
  const trimmedQuery = query.trim().toLowerCase();

  return movies.filter((movie) => {
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();

    return title.includes(trimmedQuery) || description.includes(trimmedQuery);
  });
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getSortedMovies(moviesFromServer, query);

  return (
    <>
      <MoviesList
        movies={visibleMovies}
      />

      <Page
        filterBy={(newQuery) => {
          setQuery(newQuery);
        }}
        query={query}

      />

    </>
  );
};
