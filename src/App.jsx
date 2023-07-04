import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  // const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(moviesFromServer);

  // const visibleMovies = moviesFromServer.filter(item => (
  //   item.description.toLowerCase().includes(query)
  // || item.title.toLowerCase().includes(query)
  // ));

  const searchFilter = (event) => {
    const keyword = event.target.value.toLowerCase().trim();

    const checkerFunc = (strToCheck) => {
      const lowerCased = strToCheck.toLowerCase();

      return lowerCased.includes(keyword);
    };

    if (keyword) {
      const result = moviesFromServer.filter(l => checkerFunc(l.title)
      || checkerFunc(l.description));

      setMovies(result);
    } else {
      setMovies(moviesFromServer);
    }
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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={(event) => {
                  searchFilter(event);
                  // setQuery(event.target.value.toLowerCase().trim())
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
