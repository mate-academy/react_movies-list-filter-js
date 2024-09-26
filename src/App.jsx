import { useState } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { SearchBox } from './components/Search-box';

export const App = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  return (
    <div className="page">
      <div className="page-content">
        <SearchBox
          setQuery={setQuery}
          setVisibleMovies={setVisibleMovies}
          query={query}
        />
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
