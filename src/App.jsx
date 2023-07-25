import { useState } from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search';

function filterMovies(movies, { query }) {
  let preperedMovies = [...movies];

  if (query) {
    preperedMovies = preperedMovies.filter(movie => (
      movie.title.toLowerCase().includes(query.trim().toLowerCase())
      || movie.description.toLowerCase().includes(query.trim().toLowerCase())
    ));
  }

  return preperedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterMovies(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="page-content">
        <Search
          query={query}
          filterBy={(newQuery) => {
            setQuery(newQuery);
          }}
        />
        <MoviesList movies={visibleMovies} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
