import { useState } from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { SearchBox } from './components/SearchBox/SearchBox';

function filmsFilter(goods, { quere }) {
  let result = [...goods];

  if (quere) {
    result = result.filter(
      good => good.title
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(quere.toLowerCase().replace(/\s+/g, ''))
        || good.description
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(quere.toLowerCase().replace(/\s+/g, '')),
    );
  }

  return result;
}

export const App = () => {
  const [quere, setQuere] = useState('');
  const filmPoster = filmsFilter(moviesFromServer, { quere });

  return (
    <div className="page">
      <div className="page-content">
        <SearchBox
          filterBy={(newQuere) => {
            setQuere(newQuere);
          }}
        />

        <MoviesList movies={filmPoster} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
