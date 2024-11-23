import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, sort }) => (
  <div className="movies">
    {movies
      .filter(
        movie =>
          movie.title.toLowerCase().includes(sort) ||
          movie.description.toLowerCase().includes(sort),
      )
      .map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
  </div>
);
