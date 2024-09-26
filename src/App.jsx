import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [searchQueryWithSpaces, setSearchQueryWithSpaces] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = event => {
    const { value } = event.target;

    setSearchQueryWithSpaces(value); // Сохраняем значение с пробелами
    setSearchQuery(value.trim()); // Сохраняем значение без пробелов для фильтрации
  };

  // Фильтрация списка фильмов на основе введенного текста без пробелов в начале и конце
  const filteredMovies = moviesFromServer.filter(
    movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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
                placeholder="Type search word"
                value={searchQueryWithSpaces} // Отображаем значение с пробелами
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Передача отфильтрованного списка фильмов в компонент MoviesList */}
        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
