import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
