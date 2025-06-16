import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, searchQuery }) => {
  const filteredMovies = movies.filter(
    movie =>
      movie.title.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      movie.description
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase()),
  );

  return (
    <div className="movies">
      {filteredMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
