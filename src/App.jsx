import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

// Определяем основной компонент приложения
export const App = () => {
  // Создаем состояние для хранения поискового запроса
  const [query, setQuery] = useState('');

  // Функция для фильтрации фильмов по запросу
  function preparedMovies(movies, searchQuery) {
    // Изначально список подготовленных фильмов равен исходному списку фильмов
    let filteredMovies = movies;
    const normalizedQuery = searchQuery.trim().toLowerCase();

    // Если есть поисковый запрос, фильтруем фильмы
    if (searchQuery) {
      // Фильтруем фильмы по совпадению запроса с описанием или названием фильма (без учета регистра)
      filteredMovies = filteredMovies.filter(
        movie =>
          movie.description.toLowerCase().includes(normalizedQuery) ||
          movie.title.toLowerCase().includes(normalizedQuery),
      );
    }

    // Возвращаем подготовленный список фильмов
    return filteredMovies;
  }

  // Вызываем функцию preparedMovies для получения списка видимых фильмов на основе текущего запроса
  const visibleMovies = preparedMovies(moviesFromServer, query);

  // Возвращаем JSX разметку для отображения компонента
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
                // Значение поля ввода равно текущему запросу
                value={query}
                // Обновляем состояние запроса при изменении значения в поле ввода
                onChange={event => setQuery(event.target.value)}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>
        {/* Отображаем компонент MoviesList, передавая ему видимые фильмы */}
        <MoviesList movies={visibleMovies} />
      </div>
      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};

/*
  Переменные и их значения:

  - query: строка, содержащая текущий поисковый запрос, введенный пользователем.
  - setQuery: функция для обновления состояния переменной query.
  - moviesFromServer: массив объектов фильмов, полученных с сервера (предполагается, что он определен где-то вне данного кода).
  - preparedMovies: функция, которая фильтрует список фильмов в зависимости от поискового запроса.
  - visibleMovies: массив отфильтрованных фильмов, который будет отображаться на экране.
*/
