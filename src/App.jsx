import { useState } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { SearchField } from './components/SearchField';

function setVisibleMovies(movies, query) {
  let visibleMovies = [...movies];

  if (query) {
    visibleMovies = visibleMovies.filter((movie) => {
      const textForSearch = `${movie.title} ${movie.description}`;

      return textForSearch.toLowerCase().includes(query.toLowerCase().trim());
    });
  }

  return visibleMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = setVisibleMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <SearchField
          query={query}
          filterBy={newQuery => setQuery(newQuery)}
        />

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
