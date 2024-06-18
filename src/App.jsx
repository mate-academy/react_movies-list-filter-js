import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { MovieInput } from './components/MovieInput';

export const App = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="page">
      <div className="page-content">
        <MovieInput setQuery={setQuery} query={query} />
        <MoviesList movies={moviesFromServer} query={query} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
