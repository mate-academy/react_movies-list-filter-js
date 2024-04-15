import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Field } from './components/Field/Field';
import moviesFromServer from './api/movies.json';

function getPreparedMItems(items, { query }) {
  let preparedItems = [...items];
  const formattedQuery = query.toLowerCase().trim();

  if (query) {
    preparedItems = preparedItems.filter(
      movie =>
        movie.title.toLowerCase().includes(formattedQuery) ||
        movie.description.toLowerCase().includes(formattedQuery),
    );
  }

  return preparedItems;
}

export const App = () => {
  // const [sortField, setSortField] = useState('');
  const [query, setQuery] = useState('');

  const visibleMovies = getPreparedMItems(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <Field
            filterBy={newQuery => {
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
