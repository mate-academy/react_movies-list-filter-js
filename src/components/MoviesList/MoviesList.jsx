import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  let visibleMovies = movies;
  const preparedQuery = query.trim().toLowerCase();

  if (preparedQuery) {
    visibleMovies = visibleMovies.filter(movie => {
      return (
        movie.title.toLowerCase().includes(preparedQuery) ||
        movie.description.toLowerCase().includes(preparedQuery)
      );
    });
  }

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
