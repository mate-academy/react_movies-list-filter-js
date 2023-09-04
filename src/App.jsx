import { useState } from 'react';
import './App.scss';
import { SearchBox } from './components/SearchBox';
import { MoviesList } from './components/MoviesList';
import { Sidebar } from './components/Sidebar';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const elementContainsQuery = element => (
    element.toLowerCase().includes(query.toLowerCase())
  );

  const visibleMovies = moviesFromServer.filter(
    ({ title, description }) => (
      elementContainsQuery(title) || elementContainsQuery(description)
    ),
  );

  return (
    <div className="page">
      <div className="page-content">
        <SearchBox onQueryChange={value => setQuery(value.trim())} />
        <MoviesList movies={visibleMovies} />
      </div>

      <Sidebar />
    </div>
  );
};
