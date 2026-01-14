import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchInput } from './components/SearchInput/SearchInput';

export const App = () => {
  const [query, setQuery] = useState(''); // стан для інпуту пошуку

  const onChangeValue = event => {
    setQuery(event.target.value);
  };

  const normalizedQuery = query.trim().toLowerCase();

  const visibleMovies = moviesFromServer.filter(movie => {
    const title = movie.title.toLowerCase();
    const desc = movie.description.toLowerCase();

    return title.includes(normalizedQuery) || desc.includes(normalizedQuery);
  });

  return (
    <div className="page">
      <div className="page-content">
        <SearchInput textInput={query} onChange={onChangeValue} />

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
