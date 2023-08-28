import './App.scss';

import { useState } from 'react';

import { SearchBox } from './components/SearchBox';
import { MoviesList } from './components/MoviesList';
import { Sidebar } from './components/Sidebar';

import moviesFromServer from './api/movies.json';

function getVisibleMovies(movies, { query }) {
  if (!query) {
    return movies;
  }

  return movies.filter((movie) => {
    const lcTitle = movie.title.toLowerCase();
    const lcDescription = movie.description.toLowerCase();
    const normalizedQuery = query.trim().toLowerCase();

    return lcTitle.includes(normalizedQuery)
        || lcDescription.includes(normalizedQuery);
  });
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getVisibleMovies(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="page-content">
        <SearchBox
          query={query}
          updateQuery={(newQuery) => {
            setQuery(newQuery);
          }}
        />

        <MoviesList movies={visibleMovies} />
      </div>

      <Sidebar />
    </div>
  );
};
