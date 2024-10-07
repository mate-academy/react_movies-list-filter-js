import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const visibleMovies = movies.filter(movie => {
    const searchQuery = query.trim().toLowerCase();

    return (
      movie.title.toLowerCase().includes(searchQuery) ||
      movie.description.toLowerCase().includes(searchQuery)
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
