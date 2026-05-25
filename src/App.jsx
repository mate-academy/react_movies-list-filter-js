import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  // Limpa os espaços das pontas e joga para caixa baixa
  const normalizedQuery = query.trim().toLowerCase();

  // Filtra os filmes baseado no título ou descrição
  const visibleMovies = moviesFromServer.filter(movie => {
    const titleMatch = movie.title.toLowerCase().includes(normalizedQuery);

    const descriptionMatch = movie.description
      .toLowerCase()
      .includes(normalizedQuery);

    return titleMatch || descriptionMatch;
  });

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
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Passamos apenas os filmes filtrados para a lista */}
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
