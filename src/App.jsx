import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Header } from './components/Header';

function getPrepearedMovies(movies, { query }) {
  let prepearedMovies = [...movies];

  if (query) {
    const trimmedQuery = query.trim().toLowerCase();

    prepearedMovies = prepearedMovies.filter(
      movie =>
        movie.title.toLowerCase().includes(trimmedQuery) ||
        movie.description.toLowerCase().includes(trimmedQuery),
    );
  }

  return prepearedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPrepearedMovies(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="page-content">
        <Header
          filterBy={newQuery => {
            setQuery(newQuery);
          }}
        />
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
