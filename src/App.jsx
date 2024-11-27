import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Box } from './components/Box';
import { SORT_FIELD } from './constants';

function getPreparedGoods(goods, { sortField, searchquery }) {
  let preparedGoods = [...goods];

  if (searchquery) {
    preparedGoods = preparedGoods.filter(
      good =>
        good.title.toLowerCase().includes(searchquery.toLowerCase().trim()) ||
        good.description
          .toLowerCase()
          .includes(searchquery.toLowerCase().trim()),
    );
  }

  if (sortField) {
    preparedGoods = preparedGoods.filter(good => {
      switch (sortField) {
        case SORT_FIELD.TITLE:
          return good.title
            .toLowerCase()
            .includes(searchquery.toLowerCase().trim());

        case SORT_FIELD.DESCRIPTION:
          return good.description
            .toLowerCase()
            .includes(searchquery.toLowerCase().trim());

        default:
          return 0;
      }
    });
  }

  return preparedGoods;
}

export const App = () => {
  const [searchquery, setQuery] = useState('');
  const [sortField, setSortField] = useState('');
  const visibleGoods = getPreparedGoods(moviesFromServer, {
    sortField,
    searchquery,
  });

  return (
    <div className="App">
      <h1>Movies List</h1>
      <div className="page">
        <div className="page-content">
          <Box
            sortField={sortField}
            sortBY={field => {
              setSortField(field);
            }}
            searchquery={searchquery}
            filterBy={newQuery => {
              setQuery(newQuery);
            }}
          />
          <MoviesList movies={visibleGoods} />
        </div>

        <div className="sidebar">Sidebar goes here</div>
      </div>
    </div>
  );
};
