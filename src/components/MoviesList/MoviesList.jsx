import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, change, setChange }) => {
  const getFilter = (moviesArr, changeFilter) => {
    const trimmedFilter = changeFilter.trim().toLowerCase();

    return moviesArr.filter(
      movie =>
        movie.title.toLowerCase().startsWith(trimmedFilter) ||
        movie.title.toLowerCase().includes(trimmedFilter) ||
        movie.description.toLowerCase().includes(trimmedFilter),
    );
  };

  const visibleMovies = getFilter(movies, change);

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
