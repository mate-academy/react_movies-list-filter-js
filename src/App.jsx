import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { MovieInput } from './components/MovieInput';

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  const handleInputChange = (value) => {
    setInputValue(value);

    const trimmedQuery = value.trim();
    const filteredMovies = moviesFromServer.filter(movie => movie
      .title.toLowerCase().includes(trimmedQuery.toLowerCase()) || movie
      .description.toLowerCase().includes(trimmedQuery.toLowerCase()));

    setVisibleMovies(filteredMovies);
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <MovieInput inputValue={inputValue} handler={handleInputChange} />
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
