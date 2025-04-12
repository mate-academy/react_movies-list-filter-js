import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import { Filter } from './components/Filter';
import moviesFromServer from './api/movies.json';

const prepareStringForFiltering = value =>
  value.replaceAll(' ', '').toLowerCase();

const filteredMovies = filter => {
  return moviesFromServer.filter(movies => {
    const moviesTitle = prepareStringForFiltering(movies.title);
    const moviesDescription = prepareStringForFiltering(movies.description);
    const lowerCaseFIlter = prepareStringForFiltering(filter);

    return (
      moviesTitle.includes(lowerCaseFIlter) ||
      moviesDescription.includes(lowerCaseFIlter)
    );
  });
};

export function App() {
  const [query, setQuery] = useState('');

  return (
    <div className="page">
      <div className="page-content">
        <Filter query={query} filterOn={value => setQuery(value)} />

        <MoviesList movies={filteredMovies(query)} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
}
