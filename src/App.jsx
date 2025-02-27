import { useState } from 'react';
import { Search } from './components/Search';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import './App.scss';

export const App = () => {
  const [search, setSearch] = useState('');

  const visibleMovies = moviesFromServer.filter(movie => {
    return (
      movie.title.toLowerCase().includes(search.toLowerCase().trim()) ||
      movie.description.toLowerCase().includes(search.toLowerCase().trim())
    );
  });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <Search setSearch={setSearch} search={search} />
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
