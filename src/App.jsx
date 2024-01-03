import './App.scss';
import { useEffect, useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [filterValue, setIFilterValue] = useState('');
  const [movies] = useState(moviesFromServer);
  const [filteredMovies, setFilteredMovies] = useState(moviesFromServer);

  useEffect(() => {
    const filtered = movies.filter(movie => movie.title
      .toLowerCase().includes(filterValue.trim().toLowerCase())
      || movie.description.trim().toLowerCase()
        .includes(filterValue.toLowerCase()));

    setFilteredMovies(filtered);
  }, [filterValue]);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={e => setIFilterValue(e.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />

      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
