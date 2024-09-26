import { useState } from 'react';

import { SearchBar } from './components/SearchBar';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

import './App.scss';

const filteredFilms = (querry, movies) => {
  return movies.filter(
    movie =>
      movie.title.toLowerCase().includes(querry.toLowerCase().trim()) ||
      movie.description.toLowerCase().includes(querry.toLowerCase().trim()),
  );
};

export const App = () => {
  const [querry, setQuerry] = useState('');
  const movies = filteredFilms(querry, moviesFromServer);

  return (
    <div className="page">
      <div className="page-content">
        <SearchBar querry={querry} setQuerry={setQuerry} />
        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
