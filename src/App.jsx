import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar';
import moviesFromServer from './api/movies.json';

function filterMoviesByQuery(query) {
  if (query) {
    return moviesFromServer.filter(({ title, description }) => {
      const titleContainsQuery = title.toLocaleLowerCase().includes(query);
      const descriptionContainsQuery
        = description.toLocaleLowerCase().includes(query);

      return titleContainsQuery || descriptionContainsQuery;
    });
  }

  return moviesFromServer;
}

export const App = () => {
  const [query, setQuery] = useState(null);
  const filteredMovies = filterMoviesByQuery(query);

  return (
    <div className="page">
      <div className="page-content">
        <SearchBar filterBy={(newQuery) => {
          const normalizedQuerry = newQuery.trim().toLowerCase();

          setQuery(normalizedQuerry);
        }}
        />

        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
