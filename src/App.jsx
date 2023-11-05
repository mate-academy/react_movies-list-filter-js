import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Searchbar } from './components/Searchbar';

function getPreparedMovies(movies, querry = '') {
  const lowerCaseQuerry = querry.toLowerCase().trim();

  const filteredMovies = [...movies].filter((movie) => {
    const lowerCaseMovieTitle = movie.title.toLowerCase();
    const lowerCaseMovieDescription = movie.description.toLowerCase();

    return lowerCaseMovieTitle.includes(lowerCaseQuerry)
      || lowerCaseMovieDescription.includes(lowerCaseQuerry);
  });

  return filteredMovies;
}

export const App = () => {
  const [querry, setQuerry] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, querry);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <Searchbar
            querry={querry}
            setQuerry={(field) => {
              setQuerry(field);
            }}
          />
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
