import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState(''); // Căutare input
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer); // Filmele vizibile

  const handleSearchChange = event => {
    const searchQuery = event.target.value; // Păstrăm query-ul exact

    setQuery(searchQuery);

    if (searchQuery.trim() === '') {
      // Dacă query-ul are doar spații, afișăm toate filmele
      setVisibleMovies(moviesFromServer);
    } else {
      // Filtrăm filmele insensibil la majuscule/minuscule și ignorăm spațiile la început și sfârșit
      const filteredMovies = moviesFromServer.filter(
        movie =>
          movie.title
            .toLowerCase()
            .includes(searchQuery.trim().toLowerCase()) ||
          movie.description
            .toLowerCase()
            .includes(searchQuery.trim().toLowerCase()),
      );

      setVisibleMovies(filteredMovies);
    }
  };

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
                id="search-query"
                type="text"
                className="input"
                placeholder="Type search word"
                value={query} // Păstrăm textul exact așa cum l-a introdus utilizatorul
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
