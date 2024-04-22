import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search/Search';
import { getMovie } from './helpers/getMovies/getMovies';

export const App = () => {
  const [query, setQuery] = useState('');

  const movies = getMovie(query);

  return (
    <div className="page">
      <div className="page-content">
        <Search query={query} onChangeInput={setQuery} />

        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
