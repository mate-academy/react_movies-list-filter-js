import React, { useState, useMemo } from 'react'; // Importe useState e useMemo
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json'; // Assumindo que este é o caminho correto

export const App = () => {
  // 1. Definir o estado para a consulta de pesquisa
  const [searchQuery, setSearchQuery] = useState('');

  // 2. Lógica de filtragem com useMemo para otimização
  // useMemo evita que a lista de filmes filtrados seja recalculada
  // a cada renderização, a menos que searchQuery ou moviesFromServer mude.
  const filteredMovies = useMemo(() => {
    // 3. Remover espaços em branco e converter para minúsculas
    const normalizedQuery = searchQuery.trim().toLowerCase();

    // Se a consulta estiver vazia, retorne todos os filmes
    if (normalizedQuery === '') {
      return moviesFromServer;
    }

    // Filtre os filmes
    return moviesFromServer.filter(movie => {
      const normalizedTitle = movie.title.toLowerCase();
      const normalizedDescription = movie.description.toLowerCase(); // Opcional: filtrar por descrição

      return (
        normalizedTitle.includes(normalizedQuery) ||
        normalizedDescription.includes(normalizedQuery)
      );
    });
  }, [searchQuery, moviesFromServer]); // Dependências do useMemo

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
                // 5. Conectar o input ao estado
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        {/* 6. Passar os filmes filtrados para MoviesList */}
        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
