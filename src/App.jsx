import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar/SearchBar';
import moviesFromServer from './api/movies.json';

function compare(wordOne, wordTwo) {
  return wordOne.toLowerCase().includes(wordTwo.toLowerCase().trim());
}

function getMovies(films, query) {
  return [...films]
    .filter(film => compare(film.title, query)
      || compare(film.description, query));
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visiableMovies = getMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <SearchBar
          query={query}
          filterBy={(newQuery) => {
            setQuery(newQuery);
          }}
        />

        <MoviesList movies={visiableMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
