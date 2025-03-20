import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  let filteredMovies = [...movies];
  const modifiedQuery = query.trim().toLowerCase();

  if (modifiedQuery) {
    filteredMovies = movies.filter(
      movie =>
        movie.title.toLowerCase().includes(modifiedQuery) ||
        movie.description.toLowerCase().includes(modifiedQuery),
    );
  }

  if (filteredMovies.length === 0) {
    return <div className="movies">No movies found.</div>;
  }

  return (
    <div className="movies">
      {filteredMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
