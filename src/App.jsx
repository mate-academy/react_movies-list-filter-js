import './App.scss';
import { useEffect, useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getFilteredMovies = (movies, query) => movies.filter((movie) => {
  const formattedTitle = movie.title.toLowerCase();
  const formattedDescription = movie.description.toLowerCase();
  const formattedQuery = query.toLowerCase().trim();

  return formattedTitle.includes(formattedQuery)
    || formattedDescription.includes(formattedQuery);
});

export const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [visibleMovies, setVisibleMovies] = useState([...moviesFromServer]);

  useEffect(() => {
    switch (searchValue) {
      case '':
        setVisibleMovies(moviesFromServer);
        break;
      default:
        setVisibleMovies(getFilteredMovies(moviesFromServer, searchValue));
    }
  }, [searchValue]);

  const searchChangeHandler = (e) => {
    setSearchValue(e.target.value);
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

            <div className="control">
              <input
                value={searchValue}
                onChange={searchChangeHandler}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
