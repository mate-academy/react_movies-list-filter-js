import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  const visibleMovies = movies.filter(movie => {
    const normalizedQuery = query.trim().toLowerCase();
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();

    return (
      title.includes(normalizedQuery) || description.includes(normalizedQuery)
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
