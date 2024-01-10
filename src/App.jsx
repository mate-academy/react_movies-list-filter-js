import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Filter } from './components/Filter';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(movies, { query }) {
  let filteredMovies = movies;
  const lowerQuery = query.toLowerCase();

  if (movies) {
    filteredMovies = filteredMovies.filter(
      movie => (
        movie.title.toLowerCase().includes(lowerQuery)
        || movie.description.toLowerCase().includes(lowerQuery)
      ),
    );
  }

  return filteredMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="page-content">
        <Filter
          filterBy={(newQuery) => {
            setQuery(newQuery);
          }}
        />

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
