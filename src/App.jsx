import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getCorrectMovies(movies, { search }) {
  const newMovies = [...movies];

  if (search) {
    const lowSearch = search.toLowerCase().trim();

    return newMovies.filter(movie => {
      const lowMovieTitle = movie.title.toLowerCase();
      const lowMovieInfo = movie.description.toLowerCase();

      if (
        lowMovieTitle.includes(lowSearch) ||
        lowMovieInfo.includes(lowSearch)
      ) {
        return true;
      }

      return false;
    });
  }

  return newMovies;
}

export const App = () => {
  const [search, setSearch] = useState('');
  const visibleMovies = getCorrectMovies(moviesFromServer, { search });

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
                value={search}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={e => setSearch(e.currentTarget.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
