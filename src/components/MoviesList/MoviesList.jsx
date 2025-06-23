import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, filterBy }) => {
  let visibleMovies = movies;

  const query = filterBy.trim().toLowerCase();

  if (filterBy) {
    visibleMovies = visibleMovies.filter(movie => {
      return (
        movie.title.toLowerCase().includes(query) ||
        movie.description.toLowerCase().includes(query)
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
