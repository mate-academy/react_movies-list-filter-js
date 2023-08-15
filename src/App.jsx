import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterBy(query) {
  let filteredMovies = [...moviesFromServer];
  const readyQuery = query.toLowerCase().trim();
  if (query) {
    filteredMovies = filteredMovies.filter(
      movie => movie.title.toLowerCase().includes(readyQuery)
      || movie.description.toLowerCase().includes(readyQuery),
    );
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
          filterQuery={setQuery}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
