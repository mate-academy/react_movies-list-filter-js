import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search';
import moviesFromServer from './api/movies.json';

function prepareMovies(movies, { query }) {
  if (query) {
    return movies.filter(movie => (
      movie.title.toLowerCase().includes(query)
      || movie.description.toLowerCase().includes(query)
    ));
  }

  return movies;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const lowerQuery = query.trim().toLowerCase();

  const visibleMovies = prepareMovies(moviesFromServer, { query: lowerQuery });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <Search
            query={query}
            setQuery={(newQuery) => {
              setQuery(newQuery);
            }}
          />
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
