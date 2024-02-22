import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchInput } from './components/SearchInput/SearchInput';

function getVisibleMovies(query) {
  let movies = [...moviesFromServer];

  if (query) {
    movies = movies.filter(
      movie =>
        // eslint-disable-next-line
        movie.title.toLowerCase().includes(query.trim().toLowerCase()) ||
        movie.description.toLowerCase().includes(query.trim().toLowerCase()),
    );
  }

  return movies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getVisibleMovies(query);

  return (
    <div className="page">
      <div className="page-content">
        <SearchInput
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
