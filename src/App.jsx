import './App.scss';
import { useState } from 'react';

import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { SearchMovieBar } from './components/SearchMovieBar';

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = [...moviesFromServer].filter((movie) => {
    const movieTitle = movie.title.toLowerCase();
    const movieDexcription = movie.description.toLowerCase();

    return movieTitle.includes(query) || movieDexcription.includes(query);
  });

  return (
    <div className="page">
      <div className="page-content">
        <SearchMovieBar
          sortBy={value => setQuery(value)}
        />

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
