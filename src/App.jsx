import React, { useState, useMemo } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  // 1) estado da query
  const [query, setQuery] = useState('');

  // 2) normaliza a query: remove espaços nas bordas e deixa em minúsculas
  const normalizedQuery = query.trim().toLowerCase();

  // 3) visibleMovies: filmes filtrados conforme a normalizedQuery
  const visibleMovies = useMemo(() => {
    // se não houver texto, retorna todos
    if (!normalizedQuery) return moviesFromServer;

    return moviesFromServer.filter(movie => {
      const title = (movie.title || '').toLowerCase();
      const description = (movie.description || '').toLowerCase();

      return (
        title.includes(normalizedQuery) || description.includes(normalizedQuery)
      );
    });
  }, [normalizedQuery]);

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
                onChange={e => setQuery(e.target.value)}
                data-cy="SearchInput"
              />
            </div>
          </div>
        </div>

        {/* Passa somente os filmes visíveis para o componente de lista */}
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
