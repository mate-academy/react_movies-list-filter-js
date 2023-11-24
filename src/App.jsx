import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const FilterMovies = (movies, searchQuerry) => {
  if (!searchQuerry) {
    return movies;
  }

  return movies.filter((movie) => {
    const preparedSearchQuerry = searchQuerry.toLowerCase().trim();
    const preparedMovies = movie.title.toLowerCase();

    return preparedMovies.includes(preparedSearchQuerry);
  });
};

export const App = () => {
  const [movies, SetMovies] = useState(moviesFromServer);
  const [searchQuerry, setSearchQuerry] = useState('');

  const visibleMovies = FilterMovies(movies, searchQuerry);

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
                value={searchQuerry}
                onChange={event => setSearchQuerry(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList visibleMovies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
