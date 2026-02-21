import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, search }) => {
  const normalizedSearch = search.trim().toLowerCase();

  const visibleMovies = movies.filter(movie => {
    if (!normalizedSearch) {
      return true;
    }

    return (
      movie.title.toLowerCase().includes(normalizedSearch) ||
      movie.description.toLowerCase().includes(normalizedSearch)
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
