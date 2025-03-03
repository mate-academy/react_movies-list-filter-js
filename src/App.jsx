import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

export const App = () => {
  const [query, setQuery] = useState("");
  const visibleMovies = moviesFromServer.filter((movie) => {
    const lowerCaseQuery = query.trim().toLowerCase();  // Убираем пробелы в начале и конце и делаем строку строчными
    return (
      movie.title.toLowerCase().includes(lowerCaseQuery) ||  // Поиск в названии фильма
      movie.description.toLowerCase().includes(lowerCaseQuery)  // Поиск в описании фильма
    );
  });

  return(
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
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <MoviesList movies={visibleMovies} />
    </div>

    <div className="sidebar">Sidebar goes here</div>
  </div>
  )
};

