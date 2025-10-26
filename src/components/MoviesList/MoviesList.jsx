import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, search }) => {
  let visibleMovies;

  const normalize = str => str.trim().toLowerCase();
  const searchNormalized = normalize(search);

  if (search) {
    visibleMovies = movies.filter(
      movie =>
        normalize(movie.title).includes(searchNormalized) ||
        normalize(movie.description).includes(searchNormalized),
    );
  } else {
    visibleMovies = movies;
  }

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
