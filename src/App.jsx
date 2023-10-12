import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Box } from './components/Box/Box';
import moviesFromServer from './api/movies.json';

function filterByQuery(movies, query) {
  return movies
    .filter(movie => movie.title.toLowerCase()
      .includes(query.toLowerCase().trim())
    || movie.description.toLowerCase()
      .includes(query.toLowerCase().trim()));
}

export const App = () => {
  const [query, setQuery] = useState('');
  const VisibleMovies = filterByQuery(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">

        <Box filterBy={(newQuery) => {
          setQuery(newQuery);
        }}
        />

        <MoviesList movies={VisibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
