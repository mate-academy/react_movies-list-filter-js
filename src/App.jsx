import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchField } from './components/searchField/searchField';
import moviesFromServer from './api/movies.json';

function getPreparedMovies(goods, { query }) {
  let preparedMovies = [...goods];

  if (query) {
    preparedMovies = preparedMovies.filter(good => (good.title
      .toLowerCase().includes(query.toLowerCase().trim()))
      || good.description.toLowerCase().includes(query.toLowerCase().trim()));
  }

  return preparedMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getPreparedMovies(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="page-content">
        <SearchField
          filterBy={(newQuery) => {
            setQuery(newQuery);
          }}
          query={query}
        />
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
