import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterBy(query) {
  let filteredMovies = [...moviesFromServer];

  if (query) {
    filteredMovies = filteredMovies.filter(
      movie => {
        return movie.title.toLowerCase().includes(query.toLowerCase())
          || movie.description.toLowerCase().includes(query.toLowerCase())
    });
  }

  return filteredMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterBy(query);

  return (
    <div className="page">
      <div className="page-content">

        <MoviesList
          movies={visibleMovies}
          query={query}
          filterQuery={(newQuery) => {
            setQuery(newQuery);
          }}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};


