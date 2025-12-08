import './App.scss';
import { useState } from 'react';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const normalized = query.trim().toLowerCase(); // trim remove espaços dos dois lados.
  const visibleMovies = moviesFromServer.filter(movie => {
    // .filter(callback) é executado callback uma vez para cada elemento e coloca os elementos para os quais callback retorna
    // um valor verdadeiro em uma nova matriz resultante.
    // abaixo está a logica de filtro que permanece no app ao inves de permanecer nos filhos
    const title = movie.title.toLowerCase();
    const descr = movie.description.toLowerCase();

    return title.includes(normalized) || descr.includes(normalized);
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
                // event é o parametro da função.
                onChange={event => setQuery(event.target.value)} // “Toda vez que o usuário digitar algo no input,
                // pegue o valor digitado (event.target.value) e atualize o estado query com ele.”
              />
            </div>
          </div>
        </div>
        {/* Responsabilidade: MoviesList só exibe; a lógica de filtro permanece no App (lifting state up). */}
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
