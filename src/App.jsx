import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Input } from './input';

function visible(movies, query) {
  if (!query) {
    return movies;
  }

  let visibleMovies = [...moviesFromServer];
  const q = query.trim().toLowerCase();

  visibleMovies = visibleMovies.filter(m => (m.title.toLowerCase().includes(q)
  || m.description.toLowerCase().includes(q)));

  return visibleMovies;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const filterBy = (q) => {
    setQuery(q);
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <Input valueChangedCallback={filterBy} />
          </div>
        </div>

        <MoviesList movies={visible(moviesFromServer, query)} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
