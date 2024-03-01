import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getMoviesList(movies, { query }) {
  let movieList = [...movies];

  if (query) {
    const newQuery = query.toLowerCase().trim();

    movieList = movieList.filter(movie => {
      return [movie.title, movie.description]
        .map(item => item.toLowerCase())
        .some(item => item.includes(newQuery));
    });
  }

  return movieList;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getMoviesList(moviesFromServer, { query });

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
              />
            </div>
          </div>
        </div>

        <MoviesList movies={moviesFromServer} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
