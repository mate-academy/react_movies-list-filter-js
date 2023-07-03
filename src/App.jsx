import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getFilteredMovies = (searchquery) => {
  const formatedQuery = searchquery.trim().toLowerCase();
  const movies = [...moviesFromServer].filter((movie) => {
    const formatedTitle = movie.title.toLowerCase();
    const formatedDescription = movie.description.toLowerCase();

    return formatedTitle.includes(formatedQuery)
      || formatedDescription.includes(formatedQuery);
  });

  return movies;
};

export const App = () => {
  const [searchquery, setSearchQuery] = useState('');
  const preparedMovies = getFilteredMovies(searchquery);

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
                onChange={event => setSearchQuery(event.target.value)}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={preparedMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
