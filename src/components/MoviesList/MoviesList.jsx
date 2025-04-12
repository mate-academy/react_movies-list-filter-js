import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ query, moviesList }) => {
  const visibleMovies = (movies, tamplate) => {
    const result = movies.filter(movie => {
      return (
        movie.title.toLowerCase().includes(tamplate.trim().toLowerCase()) ||
        movie.description.toLowerCase().includes(tamplate.trim().toLowerCase())
      );
    });

    return result.length === 0 ? movies : result;
  };

  const movies = visibleMovies(moviesList, query);

  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
