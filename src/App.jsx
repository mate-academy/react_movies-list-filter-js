import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Searchbar } from './components/Searchbar';

export const App = () => {
  const [query, setQuery] = useState('');
  const lowerQuery = query.toLowerCase().trim();
  const visibleMovies = [...moviesFromServer].filter(
    movie =>
      // eslint-disable-next-line prettier/prettier
      movie.title.toLowerCase().includes(lowerQuery)
      // eslint-disable-next-line prettier/prettier
      || movie.description.toLowerCase().includes(lowerQuery),
  );

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <Searchbar
            query={query}
            onFilterChange={newQuery => {
              setQuery(newQuery);
            }}
          />
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
