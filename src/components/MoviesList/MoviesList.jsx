import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, filter }) => (
  <div className="movies">
    {movies
      .filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase())
        || movie.description.toLowerCase().includes(filter.toLowerCase()))
      .map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
  </div>
);
