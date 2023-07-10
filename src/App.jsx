import { useState } from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { SearchFilm } from './components/SearchFilm/SearchFilm';

function filterFilms(films, query) {
  const searchQuery = query.trim().toLowerCase();

  const findFilm = films.filter(
    film => film.title.trim().toLowerCase().includes(searchQuery)
    || film.description.trim().toLowerCase().includes(searchQuery),
  );

  return findFilm;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleFilms = filterFilms(
    moviesFromServer,
    query,
  );

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <SearchFilm
            query={query}
            filterBy={(film) => {
              setQuery(film);
            }}
          />
        </div>

        <MoviesList movies={visibleFilms} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
