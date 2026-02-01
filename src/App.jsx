import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  // Estado do texto de busca
  const [query, setQuery] = useState('');

  // Filtra a lista conforme a busca (case-insensitive e sem espaços extras)
  const visibleMovies = moviesFromServer.filter(movie => {
    const normalizedQuery = query.trim().toLowerCase();
    const normalizedTitle = movie.title.toLowerCase();
    const normalizedDescription = movie.description.toLowerCase();

    return (
      normalizedTitle.includes(normalizedQuery) ||
      normalizedDescription.includes(normalizedQuery)
    );
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
                // Input controlado pelo estado
                value={query}
                // Atualiza o estado a cada mudança no input
                onChange={e => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Renderiza somente os filmes filtrados */}
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
