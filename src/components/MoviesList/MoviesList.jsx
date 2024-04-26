import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(query.trim().toLowerCase()) ||
      movie.description.toLowerCase().includes(query.trim().toLowerCase())
    );
  });

  return (
    <div className="movies">
      {filteredMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
