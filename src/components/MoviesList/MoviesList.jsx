import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const visibleMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(query.trim().toLowerCase()) ||
      movie.description.toLowerCase().includes(query.trim().toLowerCase())
    );
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
