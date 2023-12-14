import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const visibleMovies = movies.filter((movie) => {
    const searchTerm = query ? query.trim().toLowerCase() : '';
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();

    return title.includes(searchTerm) || description.includes(searchTerm);
  });

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
