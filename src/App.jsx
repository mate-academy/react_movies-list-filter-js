import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const handleSearch = event => {
    const { value } = event.target;

    setQuery(value);
  };

  const visibleMovies = moviesFromServer.filter(movie => {
    const searchWords = query
      .toLowerCase()
      .split(/\s+/)
      .filter(word => word);
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();

    let found = true;
    let lastIndex = -1;

    for (let i = 0; i < searchWords.length; i += 1) {
      const word = searchWords[i];
      const indexInTitle = title.indexOf(word, lastIndex + 1);
      const indexInDescription = description.indexOf(word, lastIndex + 1);

      if (indexInTitle === -1 && indexInDescription === -1) {
        found = false;
        break;
      }

      lastIndex = Math.max(indexInTitle, indexInDescription);
    }

    return found;
  });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search words separated by space"
                value={query}
                onChange={handleSearch}
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
