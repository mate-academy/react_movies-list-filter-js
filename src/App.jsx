import './App.scss';
import { useState } from 'react';
import { SearchBox } from './components/SearchBox/SearchBox';
import { getNewMovies } from './getNewMovies';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const movies = getNewMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <SearchBox
          chooseMovies={(filteredMovies) => {
            setQuery(filteredMovies);
          }}
        />

        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
