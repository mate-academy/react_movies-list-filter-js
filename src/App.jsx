import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

// export function filterSearchBar(query) {
//   let copyOfMovies = [...moviesFromServer];

//   const lowerCaseQuery = query.toLowerCase().trim();
//   const lowerCaseTitle = copyOfMovies.title.toLowerCase();
//   const lowerCaseDescriptions = copyOfMovies.description.toLowerCase();

//   const queryForFilter = lowerCaseDescriptions.includes(lowerCaseQuery)
//     || lowerCaseTitle.includes(lowerCaseQuery);

//   if (query) {
//     copyOfMovies = copyOfMovies.filter(item => queryForFilter);
//   }

//   return copyOfMovies;
// }

export const App = () => {
  const [query, setQuery] = useState('');

  const filterMovies = (movies) => {
    const lowerCaseQuery = query.toLowerCase().trim();
    const lowerCaseTitle = movies.title.toLowerCase();
    const lowerCaseDescriptions = movies.description.toLowerCase();

    const queryForFilter = lowerCaseDescriptions.includes(lowerCaseQuery)
      || lowerCaseTitle.includes(lowerCaseQuery);

    return queryForFilter;
  };

  const visibleMovies = [...moviesFromServer].filter(filterMovies);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
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
                value={query}
                onChange={handleQueryChange}
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
}
